import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Play from './pages/Play/Play'
import { Row, Col } from 'antd'
import Setting from './pages/Setting/Setting'
import Help from './pages/Help/Help'
import About from './pages/About/About'

const AppRouter = () => {
  return (
    <Row className="h-100" type="flex" justify="space-around" align="middle">
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/setting" component={Setting} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
        </Router>
      </Col>
    </Row>
  )
}

export default AppRouter
