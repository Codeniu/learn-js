import React, { Component } from 'react'
import CommentApp from './components/Comment/CommentApp'
import TodoApp from './components/Todo/TodoApp'
import LayoutScreen from './screens/Layout'

class App extends Component {
  render() {
    return (
      <div>
        <LayoutScreen>
          <CommentApp />
          <TodoApp />
        </LayoutScreen>
      </div>
    )
  }
}

export default App
