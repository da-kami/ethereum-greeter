pragma solidity ^0.4.5;     

import "./mortal.sol";

contract greeter is mortal {
    /* define variable greeting of the type string */
    string greeting;

    /* this runs when the contract is executed */
    function greeter(string _greeting) public {
        greeting = _greeting;
    }

    /* main function */
    function greet() public constant returns (string) {
        return greeting;
    }
    
    function changeGreeting(string _newGreeting) public {
        greeting = _newGreeting;
    }
}