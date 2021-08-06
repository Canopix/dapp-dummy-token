import React, { useEffect } from 'react'
import { useStoreActions } from '../../store/index'
import { Props } from './WalletProvider.types'

const WalletProvider = (props: Props) => {
  const walletActions = useStoreActions((state) => state.wallet)
  const { children } = props
  
  useEffect(() => {
    if (typeof (window as any).ethereum !== 'undefined')
      walletActions.setIsInjected(true)
  }, [walletActions])
  return <>{children}</>
}

export default WalletProvider
