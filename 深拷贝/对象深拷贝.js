// 青铜
export function deepClone(target) {
  if (typeof target !== 'object') {
    return target
  }

  if (target === null) {
    return target
  }

  return JSON.parse(JSON.stringify(target))
}

// 白银
// 递归解决多层对象的拷贝
export function deepClone1(target) {
  if (typeof target === 'object') {
    let cloneTarget = {}

    for (const key in tagrget) {
      cloneTarget[key] = deepClone1(target[key])
    }

    return cloneTarget
  } else {
    return target
  }
}

// 黄金
// 兼容数组
export function deepClone1(target) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}

    for (const key in tagrget) {
      cloneTarget[key] = deepClone1(target[key])
    }

    return cloneTarget
  } else {
    return target
  }
}

// 白金
// 解决循环引用的问题
function deepClone2(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    for (const key in target) {
      cloneTarget[key] = deepClone2(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

// 钻石
// 内存优化
function deepClone3(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    for (const key in target) {
      cloneTarget[key] = deepClone3(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}
