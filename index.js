'use strict'

const uniswap = require('./src/uniswap')
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const [toToken, amountInETH] = process.argv.slice(2)
require('dotenv').config()

// TODO expand on this to support all tokens and amount
function swap() {
  const web3Provider = new HDWalletProvider(process.env.MNEMONIC, process.env.NODE_URL)
  const web3 = new Web3(web3Provider)

  const uniswapRouter = uniswap(web3)
  const tokenAddress = toToken.startsWith('0x') ? toToken : uniswapRouter.getTokenAddress(toToken)
  return web3.eth
    .getAccounts()
    .then(accounts => uniswapRouter.swapExactEthForTokens(tokenAddress, amountInETH, accounts[0]))
    .catch(error => console.error('Error while swaping tokens', error))
    .finally(() => web3Provider.engine.stop())
}
swap()
