# XtraRichPeople (XRP) Token - Robinhood Chain Implementation

XtraRichPeople (XRP) is a multi-chain token deployed on the XRP Ledger, Solana, and Robinhood Chain.

## Overview

- **Token Name**: XtraRichPeople
- **Symbol**: XRP
- **Total Supply**: 10,000,000,000 XRP
- **Decimals**: 18 (EVM standard)
- **Website**: [https://xtrarichpeople.com](https://xtrarichpeople.com)
- **Network**: Robinhood Chain (Arbitrum L2, chain ID 4663, gas paid in ETH)

## Token Information

- **Token Address (Mainnet)**: [`0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510`](https://robinhoodchain.blockscout.com/address/0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510)
- **Token Address (Testnet)**: [`0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510`](https://explorer.testnet.chain.robinhood.com/address/0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510)
- **Deployer/Owner**: `0xba1ae783bdC8d99C0eF0981FD7F68Df50836d482`

## Network Details

| | Mainnet | Testnet |
|---|---|---|
| Chain ID | 4663 | 46630 |
| RPC | https://rpc.mainnet.chain.robinhood.com | https://rpc.testnet.chain.robinhood.com |
| Explorer | https://robinhoodchain.blockscout.com | https://explorer.testnet.chain.robinhood.com |

## Setup

```bash
npm install
cp .env.example .env   # add your PRIVATE_KEY
```

## Test & Compile

```bash
npm run compile
npm test
```

## Deploy

Fund the deployer wallet with ETH on Robinhood Chain first (bridge via the canonical Arbitrum bridge — see https://docs.robinhood.com/chain/bridging).

```bash
# Testnet first (recommended)
npm run deploy:testnet

# Mainnet
npm run deploy:mainnet
```

## Verify on Blockscout

```bash
npx hardhat verify --network robinhoodMainnet <TOKEN_ADDRESS>
```

## License

MIT — see [LICENSE](LICENSE).
