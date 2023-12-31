import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

import './index.css'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  componentWillMount() {
    this._loadComments()
  }

  _loadComments() {
    const comments = window.localStorage.getItem('comments')
    if (comments) {
      this.setState({
        comments: JSON.parse(comments),
      })
    }
  }

  _saveComments(comments) {
    window.localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')

    this.state.comments.push(comment)
    this._saveComments(this.state.comments)
    this.setState({
      comments: this.state.comments,
    })
  }

  handleDeleteComment(index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}

export default CommentApp
