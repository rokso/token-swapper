'use strict'

const { tokens } = require('@uniswap/default-token-list')
const uniswapV2RouterAbi = require('./abi/uniswap.json')

const UNISWAP_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
const uniswap = function (web3) {
  const uniswapRouter = new web3.eth.Contract(uniswapV2RouterAbi, UNISWAP_ADDRESS)

  function getTokenAddress(symbol) {
    return tokens.find(token => token.symbol === symbol).address
  }

  // TODO: Add more methods

  function swapExactEthForTokens(tokenAddress, amount, from) {
    return uniswapRouter.methods
      .swapExactETHForTokens(
        1,
        [WETH_ADDRESS, tokenAddress],
        from,
        Math.round(Date.now() / 1000) + 30
      )
      .send({ value: amount, from, gas: 200000 })
  }
  return {
    getTokenAddress,
    swapExactEthForTokens
  }
}

module.exports = uniswap
