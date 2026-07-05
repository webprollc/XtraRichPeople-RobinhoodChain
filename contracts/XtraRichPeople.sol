// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title XtraRichPeople (XRP) - Robinhood Chain implementation
/// @notice Fixed-supply ERC-20 meme token. 10,000,000,000 XRP minted to deployer.
contract XtraRichPeople is ERC20, ERC20Burnable, Ownable {
    uint256 public constant TOTAL_SUPPLY = 10_000_000_000 * 10 ** 18;

    constructor() ERC20("XtraRichPeople", "XRP") Ownable(msg.sender) {
        _mint(msg.sender, TOTAL_SUPPLY);
    }
}
