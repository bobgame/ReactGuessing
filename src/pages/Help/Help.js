import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

class Help extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <>
        <h2 className="text-center">帮助</h2>
        <div className="mbh-2">
          <p>每一次系统会从0-9随机生成没有重复数字的4个数。每猜一个数字，系统会给出几A几B，其中A前面的数字表示位置正确的数的个数，而B前的数字表示数字正确而位置不对的数的个数。</p>
          <p>如正确答案为 9876，而猜的人猜 5867，则是 1A2B，其中有一个8的位置对了，记为1A，而6和7这两个数字对了，而位置没对，因此记为 2B，合起来就是 1A2B。</p>
          <p>一共有8次机会可以猜，直到猜中（即 4A0B）为止。</p>
        </div>
        <Link to="/"><Button block>返回首页</Button></Link>
      </>
    )
  }
}

export default Help
