// 可遍历的数据类型
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
// 不可遍历的数据类型
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'

const deepTag = [mapTag, setTag, arrayTag, objectTag]

// 工具函数-通用while循环
function forEach(array, iteratee) {
  let index = -1
  const length = array.length
  while (++index < length) {
    iteratee(array[index], index)
  }
  return array
}

// 判断是否为引用类型
function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

// 获取数据类型
function getType(target) {
  return Object.prototype.toString.call(target)
}

// 初始化数据
function getInit(target) {
  const Ctor = target.constructor
  return new Ctor()
}

// 克隆Symbol
function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe))
}

// 克隆正则
function cloneReg(targe) {
  const reFlags = /\w*$/
  const result = new targe.constructor(targe.source, reFlags.exec(targe))
  result.lastIndex = targe.lastIndex
  return result
}

// 克隆其他类型
function cloneOtherType(targe, type) {
  const Ctor = targe.constructor
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe)
    case regexpTag:
      return cloneReg(targe)
    case symbolTag:
      return cloneSymbol(targe)
    default:
      return null
  }
}

function clone(target, map = new WeakMap()) {
  // 原始类型直接返回
  if (!isObject(target)) {
    return target
  }

  const type = getType(target)

  let cloneTarget
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type)
  } else {
    return cloneOtherType(target, type)
  }

  // 处理循环引用
  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, cloneTarget)

  // 克隆set
  if (type === setTag) {
    target.forEach(value => {
      cloneTarget.add(clone(value, map))
    })
    return cloneTarget
  }

  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value, map))
    })
    return cloneTarget
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target)
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }
    cloneTarget[key] = clone(target[key], map)
  })

  return cloneTarget
}
