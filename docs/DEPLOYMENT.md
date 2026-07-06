# Deployment Record

## Robinhood Chain Testnet (chain ID 46630)

- **Token Address**: 0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510 (verified)
- **Deployer Address**: 0xba1ae783bdC8d99C0eF0981FD7F68Df50836d482
- **Explorer**: https://explorer.testnet.chain.robinhood.com/address/0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510
- **Deployed**: July 5, 2026

## Robinhood Chain Mainnet (chain ID 4663)

- **Token Address**: 0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510 (verified)
- **Deployer Address**: 0xba1ae783bdC8d99C0eF0981FD7F68Df50836d482
- **Explorer**: https://robinhoodchain.blockscout.com/address/0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510
- **Deployed**: July 5, 2026

## Liquidity Pool (Mainnet)

- **DEX**: Uniswap v4 on Robinhood Chain
- **Pool Address**: 0x8366a39CC670B4001A1121B8F6A443A643e40951
- **Pair**: XRP/ETH, 1% fee tier, full range
- **Initial liquidity**: 0.02 ETH + ~100,000,000 XRP
- **Initial price**: 5,000,000,000 XRP per ETH
- **Created**: July 5, 2026
- **Trade**: https://app.uniswap.org (Robinhood Chain network, token 0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510)

## Contract Details

- **Contract**: `contracts/XtraRichPeople.sol`
- **Compiler**: solc 0.8.24, optimizer enabled (200 runs)
- **Standard**: ERC-20 (OpenZeppelin v5) + ERC20Burnable + Ownable
- **Supply**: 10,000,000,000 XRP (18 decimals), fixed — minted to deployer at construction, no further minting possible

## Deployment Steps

1. Set `PRIVATE_KEY` in `.env`
2. Fund deployer with ETH on the target network
3. `npm run deploy:testnet` (or `deploy:mainnet`)
4. `npx hardhat verify --network robinhoodTestnet <ADDRESS>` (or `robinhoodMainnet`)
5. Update this file with the resulting addresses
