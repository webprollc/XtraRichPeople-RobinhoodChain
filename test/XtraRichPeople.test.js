const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("XtraRichPeople", function () {
  let token, owner, other;

  beforeEach(async function () {
    [owner, other] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("XtraRichPeople");
    token = await Token.deploy();
  });

  it("has correct name, symbol, and decimals", async function () {
    expect(await token.name()).to.equal("XtraRichPeople");
    expect(await token.symbol()).to.equal("XRP");
    expect(await token.decimals()).to.equal(18);
  });

  it("mints total supply of 10B to deployer", async function () {
    const supply = ethers.parseEther("10000000000");
    expect(await token.totalSupply()).to.equal(supply);
    expect(await token.balanceOf(owner.address)).to.equal(supply);
  });

  it("supports transfers", async function () {
    await token.transfer(other.address, ethers.parseEther("1000"));
    expect(await token.balanceOf(other.address)).to.equal(ethers.parseEther("1000"));
  });

  it("supports burning", async function () {
    const supply = await token.totalSupply();
    await token.burn(ethers.parseEther("500"));
    expect(await token.totalSupply()).to.equal(supply - ethers.parseEther("500"));
  });
});
