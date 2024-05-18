import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

const pk = process.env.FHERNANDEZ_PK;
console.log('pk', pk);

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: 'https://rpc.ankr.com/eth_sepolia',
      accounts: [process.env.FHERNANDEZ_PK as string], //put your deployment private key here
    }
  }
};

export default config;
