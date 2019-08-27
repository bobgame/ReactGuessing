import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
class About extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <>
        <h2 className="text-center">关于</h2>
        <div className="mbh-2">
          <p>Create by Bob Liu (liulingbo@foxmail.com).</p>
          <p>Github: <a href="https://github.com/bobgame/ReactGuessing" target="_blank">https://github.com/bobgame/ReactGuessing</a></p>
        </div>
        <Link to="/"><Button block>返回首页</Button></Link>
      </>
    )
  }
}

export default About
