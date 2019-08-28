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
          <h3>Create by Bob Liu (liulingbo@foxmail.com).</h3>
          <br/>
          <h3>Github: <a href="https://github.com/bobgame/ReactGuessing" target="_blank" rel="noopener noreferrer">https://github.com/bobgame/ReactGuessing</a></h3>
        </div>
        <Link to="/"><Button block>返回首页</Button></Link>
      </>
    )
  }
}

export default About
