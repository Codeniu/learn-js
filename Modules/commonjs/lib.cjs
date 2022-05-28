// 这是一个 commonJS 模块

let a = 1;
const incCounter = () => {
    a++;
}

const getters = () => {
  return a
}

module.exports = {
  a,
  incCounter,
  getters
}