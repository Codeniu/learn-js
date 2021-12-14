/**
 * 闭包是一种现象，当一个嵌套函数的子函数引用了父函数的变量时就产生了闭包
 *
 *
 */

/**
 * 将嵌套的子函数作为父函数的返回值
 *
 */
console.log('Test 1')

function fn1() {
  var a = 2

  // 1、函数嵌套
  function fn2() {
    a++
    console.log(a) // 2、引用函数外部的变量
  }
  return fn2
}

let f = fn1()

f()
f()
f = null // 即时释放内存

/**
 * 将函数作为实参传递给另一个函数调用。
 *
 */
console.log('Test 2')

function showDelay(msg, time) {
  setTimeout(function () {
    //这个function是闭包，因为是嵌套的子函数，而且引用了外部函数的变量msg
    console.log(msg)
  }, time)
}
showDelay('1s 后才显示', 2000)
