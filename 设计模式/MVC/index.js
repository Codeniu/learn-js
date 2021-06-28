// 视图
class CounterView {
  // 初始化视图
  constructor(text) {
    const body = document.querySelector('body')
    const elCounter = document.createElement('div')
    const elDisplay = document.createElement('div')
    const elButton = document.createElement('button')

    elDisplay.innerText = `Current count: ${text}`
    elButton.innerText = 'Add count'

    elCounter.appendChild(elDisplay)
    elCounter.appendChild(elButton)
    body.appendChild(elCounter)

    // 提供接口供控制器操作
    this.elDisplay = elDisplay
    this.elButton = elButton
  }

  // 更新视图自身内容的逻辑
  updateView(text) {
    this.elDisplay.innerText = `Current count: ${text}`
  }
}

// 数据模型
class CounterModel {
  constructor(initValue) {
    this.count = initValue
    // 维护观察者
    this.observers = []
  }

  // 获取数据
  getCount() {
    return this.count
  }

  // 改变数据
  setCount(value, view) {
    this.count = value

    // 通知观察者们更新
    this.observers.forEach(view => {
      view.updateView(value)
    })
  }

  // 添加观察者
  addObserver(view) {
    this.observers.push(view)
  }
}

// 控制器
class CounterController {
  constructor(model, view) {
    this.model = model
    this.view = view

    // 给视图绑定事件监听
    view.elButton.addEventListener('click', this.clickCallback.bind(this))
  }

  // 视图事件回调
  clickCallback() {
    const count = this.model.getCount()

    // 触发模型数据更新
    this.model.setCount(count + 1, this.view)
  }
}

// 建立视图
const counterView = new CounterView(0)
// 建立模型
const counterModel = new CounterModel(0)
// 添加视图为模型的观察者
counterModel.addObserver(counterView)
// 建立控制器
const counterController = new CounterController(counterModel, counterView)
// Current count: 0

// 模拟用户交互
counterView.elButton.click()
// Current count: 1
