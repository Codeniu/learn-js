// 01 number
const num1: number = 123
const num2: number = 0b111 // 二进制0b开头
const num3: number = 0o777 // 八进制0o开头
const num4: number = 0x9ab // 十六进制0x开头

// 02 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<string> = ['1', '2'] // 泛型 Array<类型>

// 03 元组类型
// 拥有不同类型的数组，数组的个数，以及对应位置的值的类型要与定义时保持一致
let arr3: [string, number] = ['xiaohong', 13]

// 04 枚举
enum ColoR {
  red,
  green,
  blue,
}

// 05 void
function sayHi(): void {
  console.log('sya hi')
}

// 06 object
function fn(obj: object): object {
  return { ...{ status: 'done' }, ...obj }
}
console.log(fn(new String('xiaohong')))
