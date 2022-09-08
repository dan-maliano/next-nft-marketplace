require("@nomiclabs/hardhat-waffle");
// const fs = require("fs")
// const privateKey = fs.readFileSync(".secret").toString();
// const projectId = "4103bb12ed0c4215b34bb1f6981e8f80"
// const privateKey = proccess.env.privateKey;
// const projectId = proccess.env.projectId;

/** @type import('hardhat/config').HardhatUserConfig */
//export const solidity = "0.8.9";
module.exports ={
    privateKey: process.env.privateKey,
    projectId: process.env.projectId,
    nftaddress: process.env.nftaddress,
    nftmarketaddress: process.env.nftmarketaddress,
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
            accounts: [privateKey]
        },
        mainnet: {
            url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
            accounts: [privateKey]
        },
    },
    solidity: "0.8.4",
    
};
//npx hardhat run --network mumbai scripts/deploy.js