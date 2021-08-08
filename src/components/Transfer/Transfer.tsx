import React, { useState } from 'react'
import { useStoreActions, useStoreState } from '../../store/index'
import { Card, Header, Field, Button } from 'decentraland-ui'
import './Transfer.css'

const Transfer = () => {
  const { loading } = useStoreState((state) => state.wallet)
  const walletActions = useStoreActions((state) => state.wallet)
  const [amount, setAmount] = useState('10')
  const [address, setAddress] = useState(
    '0xD1f6e89b0bA1d753C878bB499fE442FF357d2EdF'
  )

  const onTransferHandle = () => {
    walletActions.sendCoins({ amount, address })
  }
  return (
    <div id="transfer-container" className="center aligned">
      <Card>
        <Card.Content className="transfer-content">
          <Header className="transfer-header">Transfer</Header>
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
            placeholder="0x129344"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(event.target.value)
            }
          />
          <Button primary loading={loading} onClick={onTransferHandle}>
            Transfer
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Transfer
