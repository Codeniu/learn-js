//01. ts提供类型检查(id 应为 number 类型)
type Todo = {
  id: number
  text: string
  done: boolean
}

const bar: Todo = { id: '1', text: 'string', done: false }

//02. 只读类型：当你不希望入参被更改时,可以将入参的类型设置为只读。
type TodoReadOnly = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}
function toggleTodo(todo: TodoReadOnly): Todo {
  todo.done = !todo.done
  return todo
}

//03. 只读类型的另一种写法
// ReadOnly<...>
type TodoReadOnly2 = Readonly<{
  readonly id: number
  readonly text: string
  readonly done: boolean
}>
// or
type TodoReadOnly3 = Readonly<Todo>

// 04. 文字类型
// done 字段用实际的值表示
type completeTodo = {
  id: number
  text: string
  done: false
}

// 05. 交叉类型，A & B（intersection type）.交叉类型中如果有重复的字段第二个会覆盖第一个的值
type A = { name: string; age: string }
type B = { age: number }
type C = A & B
// error catch: age is missing
const person1: C = {
  name: '小人物',
  age: '1',
}

// 06. 泛型
// 泛型函数
function identity<T>(arg: T): T {
  return arg
}
// T 被称作为类型变量 ，
console.log(identity<string>('i am string type ')) // i am string type
// 调用泛型函数时可以传入类型变量的值，也可以省略掉，因为ts会根据你的入参进行推断
console.log(identity(2)) // 2

// 泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T
}
let myIdentity: GenericIdentityFn = identity

// 07 函数类型
// 用接口定义函数的类型
interface ISayHiFunc {
  (str: string, name: string): string
}
const sayHi: ISayHiFunc = (str: string, name: string) => str + name
console.log(sayHi('hi', '小明'))
