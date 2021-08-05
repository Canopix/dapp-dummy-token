import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'

import { Home } from '../HomePage'

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default Routes
