// 视图
class CounterView {
  // 初始化视图
  constructor(text) {
    const body = document.querySelector('body')
    const elCounter = document.createElement('div')
    const elDisplay = document.createElement('div')
    const elButton = document.createElement('button')

    elDisplay.innerText = `Current count: ${text}`
    elButton.innerText = 'Add count'

    elCounter.appendChild(elDisplay)
    elCounter.appendChild(elButton)
    body.appendChild(elCounter)

    // 提供接口供控制器操作
    this.elDisplay = elDisplay
    this.elButton = elButton
  }
}

// 数据模型
class CounterModel {
  constructor(initValue) {
    this.count = initValue
  }

  // 获取数据
  getCount() {
    return this.count
  }

  // 改变数据
  setCount(value, callback) {
    this.count = value

    // 数据更新后执行的回调，这里就是通知展示器
    callback(value)
  }
}

// 控制器
class CounterController {
  constructor(model, view) {
    this.model = model
    this.view = view

    // 给视图绑定事件监听
    view.elButton.addEventListener('click', this.clickCallback.bind(this))
  }

  // 更新视图
  updateView(value) {
    this.view.elDisplay.innerText = `Current count: ${value}`
  }

  // 更新模型
  updateModel(value, callback) {
    this.model.setCount(value, callback)
  }

  // 视图事件回调
  clickCallback() {
    const count = this.model.getCount()

    // 触发模型更新
    this.updateModel(count + 1, this.updateView.bind(this))
  }
}

// 建立视图
const counterView = new CounterView(0)
// 建立模型
const counterModel = new CounterModel(0)
// 建立控制器
const counterController = new CounterController(counterModel, counterView)
// Current count: 0

// 模拟用户交互
counterView.elButton.click()
// Current count: 1
