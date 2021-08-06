import React, { useEffect } from 'react'
import { useStoreActions, useStoreState } from '../../store/index'
import { Props } from './WalletProvider.types'
import './WalletProvider.css'

const WalletProvider = (props: Props) => {
  const { isInjected } = useStoreState((state) => state.wallet)
  const walletActions = useStoreActions((state) => state.wallet)
  const { children } = props

  useEffect(() => {
    if (typeof (window as any).ethereum !== 'undefined')
      walletActions.setIsInjected(true)
  }, [walletActions])

  if (!isInjected) {
    return (
      <div id="wallet-container">
        <div className="wallet-warning">
          We are not able to detect any wallet on your browser
          <br /> Please consider to install Metamask
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default WalletProvider
