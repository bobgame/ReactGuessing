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
        <Link to="/play/"><Button type="primary" block className="mbh-3"> 猜数字 </Button></Link>
        <Button block className="mbh-3"> 设置 </Button>
        <Button block className="mbh-3"> 帮助 </Button>
        <Button block className="mbh-3"> 关于 </Button>
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
