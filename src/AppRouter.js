import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Play from './pages/Play/Play'

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/play" component={Play} />
    </Router>
  )
}

export default AppRouter
