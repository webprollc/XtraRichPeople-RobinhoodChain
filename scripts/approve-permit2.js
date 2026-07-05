const hre = require("hardhat");

const TOKEN = "0x9DD7Fe0e4d8db575018A56Ca6b72FE9B93A0b510";
const PERMIT2 = "0x000000000022D473030F116dDEE9F6B43aC78BA3";
const AMOUNT = hre.ethers.parseEther("100000000"); // 100M XRP

async function main() {
  const [signer] = await hre.ethers.getSigners();
  console.log("Approving from:", signer.address);

  const token = await hre.ethers.getContractAt("XtraRichPeople", TOKEN, signer);
  const tx = await token.approve(PERMIT2, AMOUNT, {
    gasLimit: 100000,
    maxFeePerGas: hre.ethers.parseUnits("0.1", "gwei"),
    maxPriorityFeePerGas: hre.ethers.parseUnits("0.01", "gwei"),
  });
  console.log("Tx sent:", tx.hash);
  const receipt = await tx.wait();
  console.log("Confirmed in block", receipt.blockNumber, "- gas used:", receipt.gasUsed.toString());
  console.log("Allowance:", hre.ethers.formatEther(await token.allowance(signer.address, PERMIT2)), "XRP");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
