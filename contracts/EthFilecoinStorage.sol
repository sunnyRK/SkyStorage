pragma solidity ^0.6.0;

import "./Ownable.sol";

contract EthFilecoinStorage is Ownable {
    
    struct profile {
        string[] ipfsHashOfMedia;
        string filecoinToken;
        string userFilecoinAddress;
        bool isRegister;
    }
    
    mapping(address => profile) public profileMapping;
    
    modifier isRegister() {
        require(profileMapping[msg.sender].isRegister, "Not registered.");
        _;
    }
    
    modifier isNotRegister() {
        require(!profileMapping[msg.sender].isRegister, "Already registered.");
        _;
    }
    
    event uploadHash(address owner, string ipfsHash);
    
    function registerUser(string memory filecoinToken, string memory userFilecoinAddress) public isNotRegister {
        require(!profileMapping[msg.sender].isRegister, "Already registered.");
        profileMapping[msg.sender].filecoinToken = filecoinToken;
        profileMapping[msg.sender].userFilecoinAddress = userFilecoinAddress;
        profileMapping[msg.sender].isRegister = true;
    }
    
    function UploadNewIpfsHash(string memory ipfsHash) public isRegister {
        profileMapping[msg.sender].ipfsHashOfMedia.push(ipfsHash);
    }
    
    function getIpfsHashByIndex(uint256 index) isRegister public view returns(string memory) {
        return profileMapping[msg.sender].ipfsHashOfMedia[index];
    }
    
    function getIpfsHashLength() isRegister public view returns(uint256) {
        return profileMapping[msg.sender].ipfsHashOfMedia.length;
    }
    
    function getFilecoinToken() isRegister public view returns(string memory) {
        return profileMapping[msg.sender].filecoinToken;
    }
    
    function getFilecoinUserAddress() isRegister public view returns(string memory) {
        return profileMapping[msg.sender].userFilecoinAddress;
    }
}