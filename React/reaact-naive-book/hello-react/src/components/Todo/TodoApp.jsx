import React, { Component } from 'react'
import './index.css'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        {
          content: '测试',
          isDone: true,
        },
      ],
    }
  }

  handleSubmit(todoitem) {
    const { content } = todoitem
    if (!content) {
      alert('请填写内容')
      return
    }
    this.state.items.push(todoitem)
    this.setState({
      items: this.state.items,
    })
  }

  handleItemDone(index) {
    this.state.items[index].isDone = true
    this.setState({
      items: this.state.items,
    })
  }

  render() {
    return (
      <div className={'wrapper'}>
        <h1>TODO</h1>
        <TodoInput onSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          items={this.state.items}
          onChange={this.handleItemDone.bind(this)}
        />
      </div>
    )
  }
}

export default TodoApp
