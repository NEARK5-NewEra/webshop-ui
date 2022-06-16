import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'
const DEPOSIT_ONE = "10000000000000000000000";
const GAS_FEE = "30000000000000";
const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_payment_info', 'get_payment_shop_info', 'get_payid_from_orderid'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['req_payment', 'pay', 'confirm', 'claim', 'withdraw', 'set_payment_fee'],
  })
}

export function logout() {
  window.walletConnection.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  window.walletConnection.requestSignIn(nearConfig.contractName)
}

export async function get_payment_info(pay_id) {
  let payment_info = await window.contract.get_payment_info(
    { pay_id: pay_id }
  )
  return payment_info
}

export async function get_payment_shop_info() {
  let get_payment_shop_info = await window.contract.get_payment_shop_info()
  return get_payment_shop_info
}

export async function req_payment(user_id, msg, fee) {
  let req_payment = await window.contract.req_payment(
    { user_id: user_id, msg: msg, fee: fee }, GAS_FEE, DEPOSIT_ONE
  )
  return req_payment
}

export async function pay(pay_id) {
  let pay = await window.contract.pay(
    { pay_id: pay_id }, GAS_FEE, DEPOSIT_ONE
  )
  return pay
}

export async function confirm(pay_id) {
  let confirm = await window.contract.confirm(
    { pay_id: pay_id }, GAS_FEE, 1
  )
  return confirm
}

export async function claim(pay_id) {
  let claim = await window.contract.claim(
    { pay_id: pay_id }, GAS_FEE, DEPOSIT_ONE
  )
  return claim
}

export async function withdraw() {
  let withdraw = await window.contract.withdraw(
    {}, GAS_FEE, DEPOSIT_ONE
  )
  return withdraw
}

export async function set_payment_fee(payment_fee_percent) {
  let set_payment_fee = await window.contract.set_payment_fee(
    { payment_fee_percent: payment_fee_percent }, GAS_FEE, DEPOSIT_ONE
  )
  return set_payment_fee
}

export async function get_payid_from_orderid(order_id) {
  let get_payid_from_orderid = await window.contract.get_payid_from_orderid(
    { order_id: order_id }
  )
  return get_payid_from_orderid
}
