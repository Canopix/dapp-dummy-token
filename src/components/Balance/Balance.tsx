import React from 'react'
import { useStoreState } from '../../store/index'
import { Link } from 'react-router-dom'
import { Card, Header } from 'decentraland-ui'
import { shortAddress } from '../../utils/address'
import './Balance.css'

const Balance = () => {
  const { address, balance } = useStoreState((state) => state.wallet)

  return (
    <div id="balance-container">
      <Card centered>
        <Card.Content>
          <Header size="medium">Wallet</Header>
          <p>
            <strong>Address:</strong> {shortAddress(address)}
          </p>
          <p>
            <strong>Balance:</strong> {balance} DUMMY{' '}
            <Link to="/transfer">TRANSFER</Link>
          </p>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Balance
