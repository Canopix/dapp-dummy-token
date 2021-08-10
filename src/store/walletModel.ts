/* eslint-disable no-empty-pattern */
import { Action, action, Thunk, thunk } from 'easy-peasy'
import { toast } from 'react-toastify'
import { SUCCESS_MSG, ERROR_TX } from '../utils/toastConfig'
import { ethers } from 'ethers'
import abi from '../contracts/contracts/Token.sol/Token.json'

type SendCoin = {
  amount: string
  address: string
}
export interface WalletModel {
  address: string
  chainId: string
  contractAddress: string
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
  requestBalance: Thunk<WalletModel, void>
  sendCoins: Thunk<WalletModel, SendCoin>
}

const walletModel: WalletModel = {
  address: '',
  chainId: '',
  loading: false,
  isInjected: false,
  balance: 0,
  contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS
    ? process.env.REACT_APP_CONTRACT_ADDRESS
    : '0xCa498a756ea7f05BBa1958542C2CD8B7C99AFcB3',

  //Please don't worry about these direct mutations over state, easy-peasy makes
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
  requestBalance: thunk(async (_actions, _, { getState }) => {
    try {
      _actions.setLoading(true)
      const { contractAddress, address } = getState()
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      const contract = new ethers.Contract(contractAddress, abi, provider)
      const balance = await contract.balanceOf(address)
      _actions.setBalance(balance.toNumber())
    } catch (error) {
      console.log(error)
    } finally {
      _actions.setLoading(false)
    }
  }),
  sendCoins: thunk(async (_actions, payload, { getState }) => {
    const { address, amount } = payload
    try {
      _actions.setLoading(true)
      const { contractAddress } = getState()
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      const transaction = await contract.transfer(address, amount)
      await transaction.wait()

      toast.success(SUCCESS_MSG)
    } catch (error) {
      toast.error(ERROR_TX)
    } finally {
      _actions.setLoading(false)
    }
  }),
}

export default walletModel
