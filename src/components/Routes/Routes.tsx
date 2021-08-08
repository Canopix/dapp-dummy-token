import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'
import { WalletProvider } from '../WalletProvider'
import { Layout } from '../Layout'
import { Home } from '../HomePage'
import { Balance } from '../Balance'
import { Transfer } from '../Transfer'
import { routes } from '../../routes/routes'

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Layout>
      <WalletProvider>
        <Switch>
          <Route exact path={routes.transfer()} component={Transfer} />
          <Route exact path={routes.balance()} component={Balance} />
          <Route exact path={routes.home()} component={Home} />
        </Switch>
      </WalletProvider>
    </Layout>
  </Router>
)

export default Routes
