import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Play extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <div>
        <h2>Play</h2>
        <Link to="/">首页</Link>
      </div>
    )
  }
}

export default Play
