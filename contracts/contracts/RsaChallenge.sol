// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./Groth16Verifier.sol";

contract RsaChallenge {
    address payable public owner;
    Groth16Verifier private verifier;

    mapping(uint256 => uint256) public requests;
    mapping(uint256 => uint256) private requestsSet;
    mapping(uint256 => address) public requestsCompleted;

    uint256 public requestsCount;

    event Verified(address user, uint256 requestId);

    constructor(address snarkVerifier) payable {
        verifier = Groth16Verifier(snarkVerifier);
        owner = payable(msg.sender);
        requestsCount = 0;
    }

    function newRequest(uint256 requestId) public {
        // require(msg.sender == owner, "You aren't the owner");
        require(requestsSet[requestId] == 0, "Request already exists");
        requestsSet[requestId] = 1;
        requests[requestsCount] = requestId;
        requestsCount++;
    }

    function verifyRequest(uint256 requestId, uint256[8] memory proof) public {
        require(requestsSet[requestId] == 1, "Request does not exist");
        require(requestsCompleted[requestId] == address(0), "Request already acepted");

        uint256[2] memory pNA = [proof[0], proof[1]];
        uint256[2][2] memory pAge = [[proof[2], proof[3]], [proof[4], proof[5]]];
        // pED expiry date
        uint256[2] memory pC = [proof[6], proof[7]];

        require(verifier.verifyProof(pA, pB, pC, [requestId]), "Invalid proof");

        requestsCompleted[requestId] = msg.sender;
        emit Verified(msg.sender, requestId);
    }

}
