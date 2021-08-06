import React from 'react'
import { Redirect } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../../store/index'
import { Button } from 'decentraland-ui'
import './Home.css'

const Home = () => {
  const walletActions = useStoreActions((state) => state.wallet)
  const { address, loading } = useStoreState((state) => state.wallet)

  function handleConnect() {
    walletActions.requestAccount()
  }
  return (
    <div id="home-container">
      {address === '' && (
        <Button primary loading={loading} onClick={handleConnect}>
          Connect
        </Button>
      )}
      {address !== '' && <Redirect to="/balance" />}
    </div>
  )
}

export default Home
