const GirlsHub = function () {
  this.grils = {}
  this.on = function (name, cb) {
    if (this.grils[name]) {
      this.grils[name].push(cb)
    } else {
      this.grils[name] = [cb]
    }
  }
  this.trigger = function (name, ...arg) {
    if (this.grils[name]) {
      this.grils[name].forEach(eventListener => {
        eventListener(...arg)
      })
    }
  }
}

let girls = new GirlsHub()

girls.on('morring', () => {
  console.log('对小美说早安')
})
girls.on('morring', () => {
  console.log('对小丽说早安')
})
girls.on('morring', () => {
  console.log('对小美丽说早安')
})

girls.on('noon', () => {
  console.log('对小美说午安')
})
girls.on('noon', () => {
  console.log('对小丽说午安')
})
girls.on('noon', () => {
  console.log('对小美丽说午安')
})

girls.on('evening', () => {
  console.log('对小美说晚安')
})
girls.on('evening', () => {
  console.log('对小丽说晚安')
})
girls.on('evening', () => {
  console.log('对小美丽说晚安')
})

girls.trigger('morring')
girls.trigger('noon')
girls.trigger('evening')
