const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Balance:", hre.ethers.formatEther(balance), "ETH");

  const Token = await hre.ethers.getContractFactory("XtraRichPeople");
  const token = await Token.deploy();
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("XtraRichPeople (XRP) deployed to:", address);
  console.log("Total supply:", hre.ethers.formatEther(await token.totalSupply()), "XRP");
  console.log(
    "Verify with: npx hardhat verify --network",
    hre.network.name,
    address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
