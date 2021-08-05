import BN from "bn.js";
import { Address } from "web3x/address";
import { EventLog, TransactionReceipt } from "web3x/formatters";
import { Contract, ContractOptions, TxCall, TxSend, EventSubscriptionFactory } from "web3x/contract";
import { Eth } from "web3x/eth";
import abi from "./TokenAbi";
interface TokenEvents {
}
interface TokenEventLogs {
}
interface TokenTxEventLogs {
}
export interface TokenTransactionReceipt extends TransactionReceipt<TokenTxEventLogs> {
}
interface TokenMethods {
    balanceOf(account: Address): TxCall<string>;
    name(): TxCall<string>;
    owner(): TxCall<Address>;
    symbol(): TxCall<string>;
    totalSupply(): TxCall<string>;
    transfer(to: Address, amount: number | string | BN): TxSend<TokenTransactionReceipt>;
}
export interface TokenDefinition {
    methods: TokenMethods;
    events: TokenEvents;
    eventLogs: TokenEventLogs;
}
export class Token extends Contract<TokenDefinition> {
    constructor(eth: Eth, address?: Address, options?: ContractOptions) {
        super(eth, abi, address, options);
    }
}
export var TokenAbi = abi;
