import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  }
  handleItemDone(index) {
    this.props.onChange(index)
  }

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <TodoItem
              content={item.content}
              isDone={item.isDone}
              key={index}
              index={index}
              onChange={this.handleItemDone.bind(this)}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList
