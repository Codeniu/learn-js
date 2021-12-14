'use strict'

function greet(person: string) {
  return 'Hello, ' + person
}

console.log(greet('TypeScript'))

// 基本类型
let isDone: boolean = false
let count: number = 10
let englishName: string = 'Jack'

let numberList1: number[] = [1, 2, 3]
let numberList2: Array<number> = [1, 2, 3] // Array<number>泛型语法

enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH
console.log('dir:', dir)

// any 类型
let notSure: any = 666
notSure = 'semlinker'
notSure = false

// unknow   类型
let value: unknown
value = true // OK
value = 42 // OK
value = 'Hello World' // OK
value = [] // OK
value = {} // OK
value = Math.random // OK
value = null // OK
value = undefined // OK
value = new TypeError() // OK
// value = Symbol("type"); // OK

// tuple 类型
let tupleType: [string, boolean]
tupleType = ['semlinker', true]
