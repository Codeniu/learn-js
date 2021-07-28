import React, { Component } from 'react'

class Title extends Component {
  handleTitle2(e) {
    console.log('title2:', e, this)
    /* 
      为什么这里的this是underfine？

      这是因为 React.js 调用你所传给它的方法的时候，并不是通过对
      象方法的方式调用（this.handleClickOnTitle），而是直接通
      过函数调用（handleClickOnTitle），所以事件监听函数内并不
      能通过 this 获取到实例。 

      可以这么理解，这是组件方法，并没有绑定到实例，所以这里的 this
      是 null。
    */
  }

  handleTitle3(e) {
    console.log('title3:', e, this)
    // 手动传入当前类的实例，此时 this 指向当前组件（Title）的实例
  }

  render() {
    return (
      <div>
        <h1
          onClick={e => {
            console.log(e, this)
            // this 指向 Title 的实例
          }}
          onCopy={e => {
            alert('复制chengg')
          }}
        >
          Title:hello react
        </h1>

        <h1 onClick={this.handleTitle2}>Title2:hello react</h1>
        <h1 onClick={this.handleTitle3.bind(this)}>Title3:hello react</h1>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return <h1>i'm content</h1>
  }
}

class Footer extends Component {
  render() {
    return <h1>i'm footer</h1>
  }
}

class LayoutScreen extends Component {
  render() {
    return (
      <div>
        <Title />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default LayoutScreen
