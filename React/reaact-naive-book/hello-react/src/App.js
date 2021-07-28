import React, { Component } from 'react'
import LayoutScreen from './screens/Layout'
import ListScreen from './screens/List'
import CommentApp from './components/Comment/CommentApp'

class App extends Component {
  render() {
    return (
      <div>
        <CommentApp />
      </div>
    )
  }
}

export default App
