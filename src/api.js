const axios = require("axios");

const getTokenHolders = async (tokenContractAddress) => {
  const url = `https://api.scan.pulsechain.com/api?module=token&action=getTokenHolders&contractaddress=${tokenContractAddress}&page=1&offset=10`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data.result; // Assuming response format includes result field
  } catch (error) {
    console.error("Error fetching token holders:", error);
    return [];
  }
};

const getTokenBalance = async (contractAddress, address) => {
  const url = `https://api.scan.pulsechain.com/api?module=account&action=tokenbalance&contractaddress=${contractAddressHash}&address=${addressHash}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data; // Assuming response format includes result field
  } catch (error) {
    console.error("Error fetching token holders:", error);
    return [];
  }
};

module.exports = {
  getTokenHolders,
  getTokenBalance,
};
