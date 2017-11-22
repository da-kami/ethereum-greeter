var Greeter = artifacts.require("./greeter.sol");

contract('Greeter', function(accounts) {
  
  var greeter;

  it("should put the initial greeting in ", function() {
    return Greeter.deployed().then(function(instance) {
      return instance.greet.call();
    }).then(function(greeting) {
      assert.equal(greeting, "Hagenberg rocks!", "conract was not initialized correctly");
    });
  });

  it("should change the greeting on change", function() {
    return Greeter.deployed().then(function(instance) {
      greeter = instance;
      return greeter.changeGreeting.sendTransaction("bla", {from: accounts[1]});
    }).then(function() {
      return greeter.greet.call();
    }).then(function(greeting) {
      assert.equal(greeting, "bla", "greeting was not changed correctly");
    });
  });


});
