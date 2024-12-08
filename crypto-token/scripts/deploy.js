const { ethers } = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const provider = ethers.provider;

  

  // Get the contract factory
  const Lock = await ethers.getContractFactory("Lock");

  // Check the balance of the deployer account
  // Check the balance of the deployer account
  // const balance = await provider.getBalance(deployer.address);
  // console.log("Account balance:", ethers.utils.formatEther(balance.toString()), "ETH");


  // Define unlockTime (1 year from now)
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const latestTime = (await ethers.provider.getBlock("latest")).timestamp;
  const unlockTime = latestTime + ONE_YEAR_IN_SECS;

  // Define the locked amount (1 GWEI)
  const ONE_GWEI = 1_000_000_000;
  const lockedAmount = ONE_GWEI;

  // Deploy the contract and wait for it to be mined
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  await lock.waitForDeployment(); // Ensure deployment is confirmed

  // Get the contract address
  const contractAddress = await lock.getAddress();

  // Log the deployment details
  console.log("Lock contract deployed to:", contractAddress);
  console.log("Unlock time set to:", unlockTime);
  console.log("Locked amount:", lockedAmount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
