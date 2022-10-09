const md5 = require('./md5')

var v1 = md5('{"name":"嘻嘻嘻嘻嘻嘻嘻嘻嘻","age":22}') //56b21847ed32d2d96cf74077b22342eb
console.log(v1)
var v2 = md5('{"name":"嘻嘻嘻嘻嘻嘻嘻嘻嘻"}') //80b36b8a15ece3158c4e30130d4d4453
console.log(v2)
