var mod = require('./lib.cjs')


console.log(mod.a);

mod.incCounter()

console.log(mod.a);

console.log(mod.getters());

