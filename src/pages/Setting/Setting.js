import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <>
        <h2 className="text-center">设置</h2>
        <div className="mbh-2">
          当前并没有可以设置的内容。
        </div>
        <Link to="/"><Button block>返回首页</Button></Link>
      </>
    )
  }
}

export default Setting
