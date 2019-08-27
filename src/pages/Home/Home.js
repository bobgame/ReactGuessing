import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <>
        <h1 className="text-center mbh-4">猜数字</h1>
        <Link to="/play"><Button size="large" type="primary" block className="mbh-2"> 猜数字 </Button></Link>
        <Link to="/setting"><Button size="large" block className="mbh-2"> 设置 </Button></Link>
        <Link to="/help"><Button size="large" block className="mbh-2"> 帮助 </Button></Link>
        <Link to="/about"><Button size="large" block> 关于 </Button></Link>
      </>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

export default connect(stateToProps, null)(Home)
