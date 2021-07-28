import React, { Component } from 'react'

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' },
]

class User extends Component {
  render() {
    const { user } = this.props

    return (
      <div>
        <div>name:{user.username}</div>
        <div>age:{user.age}</div>
        <div>gender:{user.gender}</div>
      </div>
    )
  }
}

class ListScreen extends Component {
  render() {
    // 手动循环jsx
    /*  let elementList = []
    for (let i = 0; i < users.length; i++) {
      const element = users[i]
      elementList.push(
        <div>
          <div>{element.username}</div>
          <div>{element.age}</div>
          <div>{element.gender}</div>
          <hr />
        </div>
      )
    }
    return <div>{[elementList]}</div> */

    // 使用 map 处理列表
    /* return (
      <div>
        {users.map(v => {
          return (
            <div>
              <div>name:v.username</div>
              <div>age:v.age</div>
              <div>gender:v.gender</div>
            </div>
          )
        })}
      </div>
    ) */

    // 抽离出 user 组件
    return users.map((user, i) => {
      return <User key={i} user={user} />
    })
  }
}

export default ListScreen
