import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from 'easy-peasy'
import { Routes } from './components/Routes'
import reportWebVitals from './reportWebVitals'
import store from './store'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
        <Routes />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
