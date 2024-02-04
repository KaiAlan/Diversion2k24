//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
import "./Registration_interface.sol";


contract Registration{

    mapping(address=>Registration_interface.farmerdetails) public addresstofarmer;
    mapping(address=>bool)public farmervalidation;
    mapping(address=>mapping(uint256=>Registration_interface.cropdetails))public addresstocrops;
    mapping(address=>string)public addtoname;
    Registration_interface.farmerdetails[] farmer;
    function addFarmer(string memory _name,string memory _location, string memory _phone)public {
        Registration_interface.farmerdetails memory f=Registration_interface.farmerdetails({
            name: _name,
            location:_location,
            phone: _phone,
            role:"Farmer"
        });
        farmer.push(f);
        addresstofarmer[msg.sender]=f;
        farmervalidation[msg.sender]=true;
        addtoname[msg.sender]=_name;
    }
    mapping(address=>Registration_interface.everydetails) public addresstoevery;
    mapping(address=>bool)public Distributorvalidation;
    mapping(address=>bool)public Retailervalidation;
    mapping(address=>bool)public Consumervalidation;

    function addDistributor(string memory _name,string memory _location,string memory _phone,bool distributor,bool retailer,bool consumer)public{
        Registration_interface.everydetails memory e=Registration_interface.everydetails({
            name: _name,
            location: _location,
            phone:_phone,
            role:""
        });
        addtoname[msg.sender]=_name;
        if(distributor){
            Distributorvalidation[msg.sender]=true;
            e.role="Distributor";
        }
        else if(retailer){
            Retailervalidation[msg.sender]=true;
            e.role="retailer";
        }
        else if(consumer){
            Consumervalidation[msg.sender]=true;
            e.role="Consumer";
        }

        addresstoevery[msg.sender]=e;
    }

}