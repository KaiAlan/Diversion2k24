//SPDX-License-Identifier:MIT
pragma solidity ^0.8.19;

contract Registration_interface {
    struct farmerdetails{
        string name;
        string location;
        string phone;
        string role;
    }
    struct user{
        address a;
        string name;
    }
    struct everydetails{
        string name;
        string location;
        string phone;
        string role;
    }
    struct ownerdetails{
        user u1;
        user u2;
        uint256 timestamp;
    }
    struct cropdetails{//stores all the details of the crop harvested
        string cropname;
        string farmername;
        string typeofcrop;
        uint256 area;
        uint256 cropquantity;
        uint256 id;
        ownerdetails o;
    }
    
}