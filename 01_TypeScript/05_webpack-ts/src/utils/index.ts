/**
 * 驼峰命名
 * the-camel-case => theCamelCase
 * The_camel_Case => TheCamelCase
 */
export const toCamelCase = (str: string): string => {
  if (!str) return ''
  if (typeof str !== 'string') return `input string but ${typeof str}`
  const formateStr = str.replace(/_/g, '-').split('-')
  const upperArr = formateStr.map(v => {
    v = v.slice(0, 1).toUpperCase() + v.slice(1).toLocaleLowerCase()
    return v
  })

  const upperStr = upperArr.join('')
  return str.slice(0, 1) === upperStr.slice(0, 1)
    ? upperStr
    : upperStr.slice(0, 1).toLowerCase() + upperStr.slice(1)
}

/**
 * 驼峰命名2
 * @param str
 * @returns
 */
export const toCamelCase2 = (str: string): string => {
  return str.replace(/[_-](w)/g, match => {
    return match.toUpperCase()
  })
}

/**
 * 计算给定数组元素平方的和
 * @param numbers
 * @returns
 * [2,3] => 2^2 + 3^3
 */
export const squareSum = (numbers: number[]): number => {
  return numbers.reduce((total, currentValue, index) => {
    return total + currentValue * currentValue
  }, 0)
}

/**
 * 找出给定整数数组中出现次数为奇数的元素(数组中总是包含一个符合条件的元素)
 * [1,2,3,3,1] => 1
 */
export const findOdd = (xs: number[]) => {
  let count: { [index: number]: number } = {}
  xs.forEach((item: number) => {
    if (count[item]) {
      count[item] = count[item] + 1
    } else {
      count[item] = 1
    }
  })

  for (let i = 0; i < Object.keys(count).length; i++) {
    const index: number = Number(Object.keys(count)[i])
    const item: number = count[index]
    if (item % 2 !== 0) {
      return Number(Object.keys(count)[i])
    }
  }
}
