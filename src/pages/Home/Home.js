import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <Row className="h-100" type="flex" justify="space-around" align="middle">
        <Col span={12}>
          <h1 className="text-center mbh-4">猜数字</h1>
          <Link to="/play/"><Button type="primary" block className="mbh-3"> 猜数字 </Button></Link>
          <Button type="primary" block className="mbh-3"> 设置 </Button>
          <Button type="primary" block className="mbh-3"> 帮助 </Button>
          <Button type="primary" block className="mbh-3"> 关于 </Button>
        </Col>
      </Row>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

export default connect(stateToProps, null)(Home)
