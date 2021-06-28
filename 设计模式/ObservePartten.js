// 被观察者
class ABeautifulGirl {
  TIAN_GOU_LIST = [] // 舔狗们

  // 添加观察者
  attractTianGou(...tianGous) {
    Array.prototype.push.apply(this.TIAN_GOU_LIST, tianGous)
  }

  // 删除观察者
  kickOffTianGou(tianGou) {
    const index = this.TIAN_GOU_LIST.indexOf(tianGou)
    this.TIAN_GOU_LIST.splice(index, 1)
  }

  // 女神技能:发朋友圈(发布通知)
  sendPost(data) {
    this.TIAN_GOU_LIST.forEach(tianGou => {
      tianGou.callback.call(tianGou, data)
    })
  }
}

// 观察者
class TianGou {
  constructor(name, fn) {
    this.name = name
    this.lick = fn
  }

  callback(data) {
    console.log(
      `我是 ${this.name} 今天女神发朋友圈说她 ${data} ,我要给女神发信息：`
    )
    this.lick()
  }
}

// 定义两个观察者
const tiangou1 = new TianGou('tiangou1', () => {
  console.log('多喝热水')
})
const tiangou2 = new TianGou('tiangou2', () => {
  console.log('请一定要多喝热水呀')
})

// 小美通过自己的努力有了吸引别人关注的能力
const xiaomei = new ABeautifulGirl()
xiaomei.attractTianGou(tiangou1, tiangou2)

// 小美发了个朋友圈
xiaomei.sendPost('肚子疼')
xiaomei.sendPost('头疼')
