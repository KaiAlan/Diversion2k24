// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Registration.sol";
import "./Registration_interface.sol";

contract Supplychain_revised is Registration {
    uint256 public cropIndex;
    address public owner;
    
    event OwnerChanged(address indexed oldAddress, address indexed newAddress);
    event CropAdded(address indexed owner, string cropname, uint256 quantity);
    event CropTransferred(address indexed from, address indexed to, uint256 cropIndex, uint256 quantity);
    Registration_interface.cropdetails[] private cr;
    mapping(uint256=>Registration_interface.cropdetails[])public idtodetails;

    modifier onlyFarmer() {
        require(Registration.farmervalidation[msg.sender], "Only the owner of the crop can access/change the details");
        _;
    }

    mapping(address => Registration_interface.cropdetails[]) public ownedCrops;
    mapping(address => Registration_interface.cropdetails[]) public ownedCrops1;

    function addCropDetails(
        string memory _cropname,
        string memory _typeofcrop,
        uint256 _landarea,
        uint256 _cropquantity
    ) public onlyFarmer {
        Registration_interface.ownerdetails memory od = Registration_interface.ownerdetails({
            u1: Registration_interface.user({ a: msg.sender, name: Registration.addtoname[msg.sender] }),
            u2: Registration_interface.user({ a: address(0), name: "" }),
            timestamp: 0
        });

        Registration_interface.cropdetails memory c = Registration_interface.cropdetails({
            cropname: _cropname,
            farmername: Registration.addtoname[msg.sender],
            typeofcrop: _typeofcrop,
            area: _landarea,
            cropquantity: _cropquantity,
            id: cropIndex,
            o: od
        });
        idtodetails[cropIndex].push(c);
        Registration.addresstocrops[msg.sender][cropIndex] = c;
        ownedCrops[msg.sender].push(c);
        cropIndex++;

        emit CropAdded(msg.sender, _cropname, _cropquantity);
    }

    function changeOwner(address newOwner, uint256 id, uint256 quantity) public {
        require(id < cropIndex, "Invalid crop ID");

        emit OwnerChanged(owner, newOwner);

        Registration_interface.cropdetails storage crop = Registration.addresstocrops[msg.sender][id];
        require(quantity <= crop.cropquantity, "Insufficient quantity");

        // Subtract quantity from the original owner's crop
        crop.cropquantity -= quantity;

        // Create a new crop with the updated quantity for the new owner
        Registration_interface.cropdetails memory updatedCrop = Registration_interface.cropdetails({
            cropname: crop.cropname,
            farmername: crop.farmername,
            typeofcrop: crop.typeofcrop,
            area: crop.area,
            cropquantity: quantity,
            id: id,
            o: Registration_interface.ownerdetails({
                u1: Registration_interface.user({ a: msg.sender, name: Registration.addtoname[msg.sender] }),
                u2: Registration_interface.user({ a: newOwner, name: Registration.addtoname[newOwner] }),
                timestamp: block.timestamp
            })
        });

        // Add the updated crop to the new owner's crops
        Registration.addresstocrops[newOwner][id] = updatedCrop;
        ownedCrops[newOwner].push(updatedCrop);
        ownedCrops1[newOwner].push(updatedCrop);  // Include this line to update ownedCrops1

        // Update the owner variable
        owner = newOwner;

        // Update the original owner's details
        crop.o.u2.a = newOwner;
        crop.o.u2.name = Registration.addtoname[newOwner];
        crop.o.timestamp = block.timestamp;
        
        // Update the original owner's crop details in the mapping
        ownedCrops[msg.sender][id] = crop;
        idtodetails[id].push(updatedCrop);
    }

    function getAllCrops() public view returns (Registration_interface.cropdetails[] memory) {
        return ownedCrops[msg.sender];
    }

    function owned() public view returns (Registration_interface.cropdetails[] memory) {
        return ownedCrops[owner];
    }
    function idtoDetails(uint256 i) public view returns(Registration_interface.cropdetails[] memory){
        return idtodetails[i];
    }
}