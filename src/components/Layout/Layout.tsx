import React from 'react'
import { Navbar, Footer } from 'decentraland-ui'
import { Props } from './Layout.types'
import './Layout.css';

const Layout = (props: Props) => {
  const { children } = props
  return (
    <div id="layout-main">
      <Navbar />
      <div id="layout-children">
      {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
