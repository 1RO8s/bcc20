const BCC20 = artifacts.require("./BCC20.sol");

module.exports = function(deployer, network, account) {
  const name = "BCC20";
  const symbol = "BT";
  const decimals = 18;
  const initSupply = web3.utils.toBN(100*(10**decimals));

  return deployer.then(()=>{
    return deployer.deploy(
      BCC20,
      name,
      symbol,
      decimals,
      initSupply
    );
  })

}
