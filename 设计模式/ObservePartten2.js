class ABeautifulGirl {
  constructor(name) {
    this.name = name
  }
  TIAN_GOU_LIST = []

  sendPost(data) {
    console.log(`${this.name},发个朋友圈`)
    this.TIAN_GOU_LIST.forEach(tianGou => {
      tianGou.callback.call(tianGou, data)
    })
  }
}

// 观察者：(主动)关注或取消关注
class TianGou {
  constructor(name, fn) {
    this.name = name
    this.lick = fn
  }

  subscribe(publish) {
    var sub = this
    var alreadyExists = publish.TIAN_GOU_LIST.some(function (item) {
      return item === sub
    })
    // 如果女神的好友名单中没有这个人，则加入进去
    if (!alreadyExists) publish.TIAN_GOU_LIST.push(sub)
    return this
  }

  unsubscribe(publish) {
    var sub = this
    publish.TIAN_GOU_LIST = publish.TIAN_GOU_LIST.filter(function (item) {
      return item !== sub
    })
    return this
  }

  callback(data) {
    console.log(
      `    ${this.name} 看到女神发朋友圈说她 ${data} ,我要给女神发信息：`
    )
    this.lick()
  }
}

// 小美 & 小丽
const xiaomei = new ABeautifulGirl('xiaomei')
const xiaoli = new ABeautifulGirl('xiaoli')

// 定义两个观察者
const tiangou1 = new TianGou('tiangou1', () => {
  console.log('    多喝热水')
})
const tiangou2 = new TianGou('tiangou2', () => {
  console.log('    请一定要多喝热水呀')
})

// 舔狗主动订阅女神们的消息
tiangou1.subscribe(xiaomei).subscribe(xiaoli)
tiangou2.subscribe(xiaomei)

// 小美小丽肚子疼
xiaomei.sendPost('肚子疼')
xiaoli.sendPost('腰子疼')
