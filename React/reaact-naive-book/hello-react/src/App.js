import React, { Component } from 'react'
import LayoutScreen from './screens/Layout'
import ListScreen from './screens/List'
import CommentApp from './components/Comment/CommentApp'
import TodoApp from './components/Todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div>
        <CommentApp />
        <TodoApp />
      </div>
    )
  }
}

export default App
