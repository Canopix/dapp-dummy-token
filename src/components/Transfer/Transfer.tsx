import React, { useState } from 'react'
import { useStoreActions, useStoreState } from '../../store/index'
import { Card, Header, Field, Button } from 'decentraland-ui'
import './Transfer.css'

const Transfer = () => {
  const { loading } = useStoreState((state) => state.wallet)
  const walletActions = useStoreActions((state) => state.wallet)
  const [amount, setAmount] = useState('10')
  const [address, setAddress] = useState('')

  const onTransferHandle = () => {
    walletActions.sendCoins({ amount, address })
  }
  const isDisabled = amount === '' || address === ''
  return (
    <div id="transfer-container">
      <Card style={{ width: 'fit-content' }}>
        <Card.Content className="transfer-content">
          <Header className="center">Transfer</Header>
          <Header className="center" size="small">
            Send tokens to an account
          </Header>
          <Field
            label="Amount"
            value={amount}
            placeholder="0"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(event.target.value)
            }
          />
          <Field
            label="Address"
            type="address"
            placeholder="0x..."
            value={address}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(event.target.value)
            }
          />
          <Button
            primary
            disabled={isDisabled}
            loading={loading}
            onClick={onTransferHandle}
          >
            Transfer
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Transfer
