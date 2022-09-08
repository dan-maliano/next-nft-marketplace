// export const nftaddress = process.env.nftaddress;
// export const nftmarketaddress = process.env.nftmarketaddress;
// //EDIT !!!
// let x = 1;
//change the above everytime you redeploy your contracts

//command for deploying your contracts on hardhat:
// npx hardhat run --network localhost scripts/deploy.js

//command for starting or restarting your server:
//npx hardhat node
// import secret from "./secret.json";
import { privateKey as _privateKey, projectId as _projectId, nftaddress as _nftaddress, nftmarketaddress as _nftmarketaddress } from "./secret.json";

module.exports = {
    privateKey: _privateKey,
    projectId: _projectId,
    nftaddress: _nftaddress,
    nftmarketaddress: _nftmarketaddress
};