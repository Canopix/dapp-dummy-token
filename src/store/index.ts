import { createStore, createTypedHooks } from 'easy-peasy'
import walletModel, { WalletModel } from './walletModel'

export interface StoreModel {
    wallet: WalletModel;
}

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export const models: StoreModel = {
  wallet: walletModel,
}

export { useStoreActions, useStoreState, useStoreDispatch };
export default createStore(models, {
  devTools: true,
})
