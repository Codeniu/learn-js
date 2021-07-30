import React, { Component } from 'react'
import Proptypes from 'prop-types'
import './index.css'

class TodoItem extends Component {
  static propTypes = {
    content: Proptypes.string,
    isDone: Proptypes.bool,
    index: Proptypes.number,
    onChange: Proptypes.func,
  }

  handleItemToDone() {
    this.props.onChange(this.props.index)
  }

  render() {
    return (
      <div className={'todoItem-wrapper'}>
        <div
          className={['todoItem-circle', this.props.isDone ? 'done' : ''].join(
            ' '
          )}
          onClick={this.handleItemToDone.bind(this)}
        ></div>
        <span
          className={'todoItem-content'}
          style={this.props.isDone ? { textDecoration: 'line-through' } : {}}
        >
          {this.props.content}
        </span>
      </div>
    )
  }
}

export default TodoItem
