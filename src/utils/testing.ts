import * as easyPeasy from 'easy-peasy'
import { models } from '../store'

export const useStoreActionsFunction = jest.fn(() => ({
  setAddress: jest.fn(),
  setChainId: jest.fn(),
  setLoading: jest.fn(),
  setIsInjected: jest.fn(),
  setBalance: jest.fn(),
  requestAccount: jest.fn(),
  requestChainId: jest.fn(),
  requestBalance: jest.fn(),
  sendCoins: jest.fn(),
}))

export const spyOnStoreActions = () =>
  jest
    .spyOn(easyPeasy, 'useStoreActions')
    .mockImplementation(useStoreActionsFunction)

export const walletModel = {
  address: '0xc77DD46aBFf64BB1dE74e6419e77258Bdc98622a',
  chainId: '0x3',
  loading: false,
  isInjected: false,
  balance: 500,
  contractAddress: '0xCa498a756ea7f05BBa1958542C2CD8B7C99AFcB3',
}

export const mockStore = easyPeasy.createStore(models, {
  initialState: {
    wallet: { ...models.wallet, ...walletModel },
  },
})

export const storeOnDemand = (initialValues: Object) => easyPeasy.createStore(models, {
    initialState: {
      wallet: { ...models.wallet, ...walletModel, ...initialValues },
    },
  })

