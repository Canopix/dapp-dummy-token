import React, { useEffect } from 'react'
import { useStoreState } from '../../store/index'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { DEFAULT_DURATION } from '../../utils/toastConfig'
import { Navbar, Footer } from 'decentraland-ui'

import { Props } from './Layout.types'
import './Layout.css'
import 'react-toastify/dist/ReactToastify.css'

const Layout = (props: Props) => {
  const { address } = useStoreState((state) => state.wallet)

  const history = useHistory()
  const { children } = props

  useEffect(() => {
    if (address === '') history.push('/')
  }, [address, history])

  return (
    <div id="layout-main">
      <ToastContainer
        position="top-center"
        autoClose={DEFAULT_DURATION}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <div id="layout-children">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
