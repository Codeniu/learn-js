interface PageTimingInfo {
  // First Paint Time，首次渲染时间（白屏时间）: 从请求开始到浏览器开始解析第一批HTML文档字节的时间差。。
  fpt: number
  // Time to Interact，首次可交互时间: 浏览器完成所有HTML解析并且完成DOM构建，此时浏览器开始加载资源。。
  tti: number
  // HTML加载完成时间， 即DOM Ready时间: 如果页面有同步执行的JS，则同步JS执行时间 = ready - tti。。
  ready: number
  // 页面完全加载时间: load = 首次渲染时间 + DOM解析耗时 + 同步JS执行 + 资源加载耗时。
  loadTime: number
  // 首包时间
  firstbyte: number
  // DNS查询耗时
  dns: number
  // TCP连接耗时
  tcp: number
  // Time to First Byte（TTFB），请求响应耗时。
  ttfb: number
  // 内容传输耗时
  trans: number
  // DOM解析耗时
  dom: number
  // 资源加载耗时(表示页面中的同步加载资源)
  res: number
  // SSL安全连接耗时(只在HTTPS下有效)
  sslTime: number
}

export default class PerformanceMonitor {
  static instance: PerformanceMonitor

  static performance: Performance

  // 资源请求超时边界值
  static TIMEOUT = 5000

  // 单例模式
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  constructor() {
    const performance =
      window.performance || window.msPerformance || window.webkitPerformance
    if (!performance) {
      return
    }
    PerformanceMonitor.performance = performance
    PerformanceMonitor.init()
  }

  // 获取页面加载数据
  static getPageTimeData(isTiming: boolean): PageTimingInfo {
    const {
      fetchStart,
      domainLookupStart,
      domainLookupEnd,
      connectStart,
      connectEnd,
      secureConnectionStart,
      requestStart,
      responseStart,
      responseEnd,
      domInteractive,
      domContentLoadedEventStart,
      domContentLoadedEventEnd,
      loadEventStart,
    } = isTiming
      ? PerformanceMonitor.performance.timing
      : PerformanceMonitor.performance.getEntriesByType('navigation')
    return {
      // First Paint Time，首次渲染时间（白屏时间）: 从请求开始到浏览器开始解析第一批HTML文档字节的时间差。。
      fpt: responseEnd - fetchStart,
      // Time to Interact，首次可交互时间: 浏览器完成所有HTML解析并且完成DOM构建，此时浏览器开始加载资源。。
      tti: domInteractive - fetchStart,
      // HTML加载完成时间， 即DOM Ready时间: 如果页面有同步执行的JS，则同步JS执行时间 = ready - tti。。
      ready: domContentLoadedEventStart - fetchStart,
      // 页面完全加载时间: load = 首次渲染时间 + DOM解析耗时 + 同步JS执行 + 资源加载耗时。
      loadTime: loadEventStart - fetchStart,
      // 首包时间
      firstbyte: responseStart - domainLookupStart,
      // DNS查询耗时
      dns: domainLookupEnd - domainLookupStart,
      // TCP连接耗时
      tcp: connectEnd - connectStart,
      // Time to First Byte（TTFB），请求响应耗时。
      ttfb: responseStart - requestStart,
      // 内容传输耗时
      trans: responseEnd - responseStart,
      // DOM解析耗时
      dom: domInteractive - responseEnd,
      // 资源加载耗时(表示页面中的同步加载资源)
      res: loadEventStart - domContentLoadedEventEnd,
      // SSL安全连接耗时(只在HTTPS下有效)
      sslTime: secureConnectionStart
        ? connectEnd - secureConnectionStart
        : null,
    }
  }

  // 获取页面资源加载数据
  static getTimeoutRes() {
    const resourceTimes =
      PerformanceMonitor.performance.getEntriesByType('resource')
    return resourceTimes
      ? resourceTimes
          .filter(
            ({ startTime, responseEnd }) =>
              responseEnd - startTime > PerformanceMonitor.TIMEOUT
          )
          .map(
            ({
              name,
              encodedBodySize,
              decodedBodySize,
              duration,
              nextHopProtocol,
              initiatorType,
            }) => ({
              name,
              encodedBodySize,
              decodedBodySize,
              timeout: PerformanceMonitor.TIMEOUT,
              duration,
              protocol: nextHopProtocol,
              type: initiatorType,
            })
          )
      : []
  }

  static logPackage(): void {
    const { performance } = PerformanceMonitor
    const resourceList = PerformanceMonitor.getTimeoutRes()
    const { userAgent } = navigator
    const {
      location: { href: url },
    } = window
    let pageTimeData

    // 判断getEntriesByType是否可用，不可用使用timing（兼容性处理）
    if (performance.getEntriesByType('navigation').length > 0) {
      pageTimeData = PerformanceMonitor.getPageTimeData(false)
    } else if (performance.timing) {
      pageTimeData = PerformanceMonitor.getPageTimeData(true)
    }

    // 如果页面数据取到，防止performance.getEntriesByType('navigation')和performance.timing都不存在情况
    if (pageTimeData) {
      // 上传页面数据到后台
      // createWebPerformance({ ...pageTimeData, userAgent, url })
      console.log('pageTimeData: ', pageTimeData)
    }

    // 如果超时资源文件存在
    if (resourceList.length) {
      // 上传超时资源文件数据到后台
      // createWebPerformanceResource({ url, userAgent, resourceList })
    }
  }

  static bindEvent(): void {
    // 用户是否有自定义window.onload方法
    const preLoad: (e: Event) => any = window.onload
    window.onload = (e: Event) => {
      if (preLoad && typeof preLoad === 'function') {
        preLoad(e)
      }
      // 尽量不影响页面主线程
      if (window.requestIdleCallback) {
        window.requestIdleCallback(PerformanceMonitor.logPackage)
      } else {
        setTimeout(PerformanceMonitor.logPackage)
      }
    }
  }

  static init(): void {
    PerformanceMonitor.bindEvent()
  }
}

// 使用
// PerformanceMonitor.getInstance()
