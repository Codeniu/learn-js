/**
 * 获取文件名后缀
 * @param {string} filename
 */
export const getSuffixName = filename => {
  if (typeof filename === 'string') {
    return filename.split('.').pop().toLowerCase()
  } else {
    throw new Error('Invalid arguments')
  }
}

/**
 * 复制内容到剪切板
 */
export const copyToBoard = value => {
  const element = document.createElement('textarea')
  document.body.appendChild(element)
  element.value = value
  element.select()

  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(element)
    return true
  }

  document.body.removeChild(element)
  return false
}

/**
 * 休眠多少毫秒
 */
export const sleep = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchData = async () => {
  await sleep(200)
  // do sth
}

/**
 * 8位随机字符
 * @returns
 */
export const uuid = () => {
  return Number(Math.random().toString().substr(3, 0) + Date.now())
    .toString(36)
    .toUpperCase()
}

/**
 * 生成随机字符
 * @param {*} length
 * @param {*} char
 * @returns
 */
export const uuid2 = (length, chars) => {
  chars =
    chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  length = length || 8

  var result = ''
  for (let i = length; i > 0; i--) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }

  return result
}

/**
 * 简单深拷贝
 * 缺陷：只拷贝对象、数组以及对象数组，对于大部分场景已经足够
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  if (obj == null) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 数组去重
 * @param {Array} arr
 */
export const uniqueArr = arr => {
  if (!Array.isArray()) {
    throw new Error('The first parameter must be an array')
  }

  if (arr.length === 1) {
    return arr
  }

  return [...new Set(arr)]
}

/**
 * 对象转为 FormData 对象
 * @param {object} object
 */
export const getFormaData = object => {
  const formData = new FormData()

  Object.keys(object).forEach(key => {
    const value = object[key]

    // 值为数组时
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => {
        formData.append(`${key}[${i}]`, subValue)
      })
    } else {
      formData.append(key, value)
    }
  })

  return formData
}

// 保留小数点以后几位，默认2位
export function cutNumber(number, no = 2) {
  if (typeof number != 'number') {
    number = Number(number)
  }
  return Number(number.toFixed(no))
}
