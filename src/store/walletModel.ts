import { Action, action } from 'easy-peasy'

export interface WalletModel {
    address: string
    chainId: string
    loading: boolean
    isInjected: boolean
    setAddress: Action<WalletModel, string>
    setChainId: Action<WalletModel, string>
    setLoading: Action<WalletModel, boolean>
    setIsInjected: Action<WalletModel, boolean>
}

const walletModel: WalletModel = {
  address: '',
  chainId: '',
  loading: false,
  isInjected: false,

  setAddress: action((state, payload) => {
    Object.assign(state, { address: payload })
  }),
  setChainId: action((state, payload) => {
    Object.assign(state, { chainId: payload })
  }),
  setLoading: action((state, payload) => {
    Object.assign(state, { loading: payload })
  }),
  setIsInjected: action((state, payload) => {
    Object.assign(state, { isInjected: payload })
  }),
}

export default walletModel
