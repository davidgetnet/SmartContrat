require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28", // Adjust if necessary
  networks: {
    sepolia: {
      url: "https://attentive-multi-choice.ethereum-sepolia.quiknode.pro/4c4fc6feb0a92272d53e12a3f3366ef5ea9f8466",
      accounts: [`0x${process.env.PRIVATE_KEY}`]  // Ensure correct private key for deployment
    },
  },
};
