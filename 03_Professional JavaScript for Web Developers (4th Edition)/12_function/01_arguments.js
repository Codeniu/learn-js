function sayHi(name, message) {
  console.log('Hello ' + name + ', ' + message)
}

sayHi('niu', 'jjj')

function sayHi() {
  console.log('Hello ' + arguments[0] + ', ' + arguments[1])
}

sayHi('niu', 'xxx')
