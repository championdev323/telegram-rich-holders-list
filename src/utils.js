const Web3 = require("web3");

const weiToEther = (wei) => {
  return Web3.utils.fromWei(wei, "ether");
};

module.exports = {
  weiToEther,
};
