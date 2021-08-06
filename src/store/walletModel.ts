import { Action, action, Thunk, thunk } from 'easy-peasy'

export interface WalletModel {
  address: string
  chainId: string
  balance: number
  loading: boolean
  isInjected: boolean
  setAddress: Action<WalletModel, string>
  setChainId: Action<WalletModel, string>
  setLoading: Action<WalletModel, boolean>
  setIsInjected: Action<WalletModel, boolean>
  setBalance: Action<WalletModel, boolean>
  requestAccount: Thunk<WalletModel, void>
  requestChainId: Thunk<WalletModel, void>
}

const walletModel: WalletModel = {
  address: '',
  chainId: '',
  loading: false,
  isInjected: false,
  balance: 0,

  //Please don't worry about this direct mutation over state, easy-peasy makes
  //everything inmmutable under the hood. <3
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
  setBalance: action((state, payload) => {
    Object.assign(state, { balance: payload })
  }),
  requestChainId: thunk(async (_actions) => {
    try {
      _actions.setLoading(true)
      const chainId = await (window as any).ethereum.request({
        method: 'eth_chainId',
      })
      _actions.setChainId(chainId)
    } catch (error) {
      console.log(error)
    } finally {
      _actions.setLoading(false)
    }
  }),

  requestAccount: thunk(async (_actions) => {
    try {
      _actions.setLoading(true)
      const [account] = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      })
      _actions.setAddress(account)
    } catch (error) {
      console.log(error)
    } finally {
      _actions.setLoading(false)
    }
  }),
}

export default walletModel
