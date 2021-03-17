# Uniswap Token Swapper
> This is still work in progress, use at your own risk. You may lose fund.

## Motivation
Whenever any developer is working on any project in mainnet fork, almost always he need some token to work with. 
This token swapper will ease the pain of searching on web on `how to's` and writing your own script.

## Limitations
- Only swap from ETH to any token is supported.
- Input amount is ETH amount you want to swap, so you will have to provide 18 decimal value.
- Not all tokens are supported by token symbol, use token address if swap fail with address related error.

## Usage
> Only providing instructions for mainnet fork

1. Clone this repo
```git
git clone https://github.com/rokso/token-swapper.git
```

2. Start mainnet fork using below command
```bash
npm i -g ganache-cli
ganache-cli -i 1 --fork "node url" -e "eth amount" -m "your mnemonic"
```
> If you want to see balance in Metamask, make sure you use Metamask mnemonic in above command.

3. cd into `token-swapper` and create `.env` file
```bash
cd token-swapper
touch .env
```

3. Add following properties in `.env` file
```bash
NODE_URL="http://localhost:8545"
MNEMONIC="your mnemonic"
```
> If you want to use remote node, you can provide that URL above.
> Use same mnemonic here which you use for ganache mainnet fork.

4. cd in `token-swapper` and run below command
```bash
node index.js UNI 1000000000000000000
or
node index.js 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984 1000000000000000000
```
