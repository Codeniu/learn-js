let value = [1, 2, 3, 4]

let getSum = function () {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(getSum.apply(null, value))

console.log(getSum(...value))
