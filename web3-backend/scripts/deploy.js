const EnergyTokenAddress = "";
const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the RektLock Contract
  const EnergySystem = await hre.ethers.deployContract("EnergyTradingSystem", [
    EnergyTokenAddress,
  ]);
  await EnergySystem.waitForDeployment();
  console.log("EnergySystem contract deployed to:", EnergySystem.target);

  // Sleep for 30 seconds to let Etherscan catch up with the deployments
  await sleep(30 * 1000);

  // Verify the EnergySystem Contract
  await hre.run("verify:verify", {
    address: EnergySystem.target,
    constructorArguments: [EnergyTokenAddress],
  });
  console.log("Verified EnergyPlace Contract ✅");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
