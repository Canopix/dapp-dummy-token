import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'
import { Layout } from '../Layout'
import { Home } from '../HomePage'

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
)

export default Routes
