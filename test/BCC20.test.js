

const BCC20 = artifacts.require("./BCC20.sol");

contract("BCC20", accounts => {
  it("...should put 100BT in the first account.", async () => {
    const BCC20Instance = await BCC20.deployed();

    let balance = await BCC20Instance.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");

    assert.equal(balance, 100, "First account don't have 100 BT.");

  });
})
