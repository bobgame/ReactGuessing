import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Play from './pages/Play/Play'
import { Row, Col } from 'antd'

const AppRouter = () => {
  return (
    <Row className="h-100" type="flex" justify="space-around" align="middle">
      <Col span={20} lg={8} sm={12}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/play" component={Play} />
        </Router>
      </Col>
    </Row>

  )
}

export default AppRouter
