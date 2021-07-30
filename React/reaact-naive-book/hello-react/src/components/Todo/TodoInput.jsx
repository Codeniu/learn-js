import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

class TodoInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  constructor() {
    super()
    this.state = {
      content: '',
      input: null,
    }
  }

  componentDidMount() {
    this.state.input.focus()
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    })
  }

  handleSubmit() {
    this.props.onSubmit({
      content: this.state.content,
      createdTime: +new Date(),
      isDone: false,
    })
    this.setState({
      content: '',
    })

    this.state.input.focus()
  }

  render() {
    return (
      <div className={'todoInput-wrapper'}>
        <input
          ref={input => (this.state.input = input)}
          value={this.state.content}
          onChange={this.handleContentChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>添加</button>
      </div>
    )
  }
}

export default TodoInput
