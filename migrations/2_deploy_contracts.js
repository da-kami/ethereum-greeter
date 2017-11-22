var Greeter = artifacts.require("./greeter.sol");

var greeting = "Hagenberg rocks!";

module.exports = function(deployer, network, accounts) {

	let deployAccount = accounts[0];

	if (network == "rinkeby") {
		deployAccount = accounts[accounts.length - 1];
	}

  	deployer.deploy(Greeter, greeting, {from: deployAccount});
};
