import { toCamelCase, squareSum, findOdd } from './utils/index'
// import './多态'
;(() => {
  // 1
  const solution = (str, ending) => str.endsWith(ending)
  console.log(solution('abc', ''))

  const solution2 = (str, ending) => str.match(ending + '$') === ending
  console.log(solution('abc', ''))

  // 2
  const obj = {
    p: 1,
    // valueOf: () => {
    //   return { value: 1 }
    // },
    valueOf: () => 'new value',
    toString: function () {
      return 'hello'
    },
  }
  console.log('obj.valueOf():', obj.valueOf())
  console.log('obj.toString():', obj.toString())
  console.log(obj + '2')

  // 3
  const obj2 = new Date()
  obj2.valueOf = function () {
    return 1
  }
  obj2.toString = function () {
    return 'hello'
  }
  console.log(obj + '2')
})()
