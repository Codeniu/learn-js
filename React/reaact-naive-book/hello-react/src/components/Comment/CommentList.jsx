import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    )
  }
}

export default CommentList
