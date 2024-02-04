import React, { useState, useEffect, ReactNode } from "react";
import { ethers } from "ethers";

import { ContractAbi, ContractAddress } from "@/components/SupplyChain/constant";

export type SupplyChainContextType = {
    connectWallet: () => void;
    registerFarmer: (name:string, crop:string, phone_no: string) => Promise<void>;
    getFarmerDetails: () => Promise<void>;
    AddCropDetails: (cropname:string, typeofcrop: string, area: number, cropquantity: number) => void;
    GetCropById: (id: number) => void;
    currentAccount: string | undefined;
    balance: string | undefined;
    chainId: number | undefined;
    chainname: string | undefined;
    data: string | undefined;
    cropDetails:  any[] | undefined;
};

export const SupplyChainContext =
    React.createContext<SupplyChainContextType | null>(null);

declare var window: any;
const getEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const SupplyChainContract = new ethers.Contract(
        ContractAddress,
        ContractAbi,
        signer
    );

    return SupplyChainContract;
};

export const SupplyChainProvider: React.FC<{ children: ReactNode }> = ({ children, }) =>  {
    const [balance, setBalance] = useState<string | undefined>();
    const [currentAccount, setCurrentAccount] = useState<string | undefined>();
    const [chainId, setChainId] = useState<number | undefined>();
    const [chainname, setChainName] = useState<string | undefined>();
    const [data, setData] = useState<string | undefined>();
    const [cropDetails, setCropDetails] = useState<any[] | undefined>();

    useEffect(() => {
        if (!currentAccount || !ethers.isAddress(currentAccount)) return;
        //client side code
        if (!window.ethereum) return;
        const provider = new ethers.BrowserProvider(window.ethereum);
        provider.getBalance(currentAccount).then((result) => {
            setBalance(ethers.formatEther(result));
        });
        provider.getNetwork().then((result) => {
            setChainId(ethers.toNumber(result.chainId));
            setChainName(result.name);
        });
    }, [currentAccount]);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                console.log("please install MetaMask");
                return;
            }

            //we can do it using ethers.js
            const provider = new ethers.BrowserProvider(window.ethereum);

            // MetaMask requires requesting permission to connect users accounts
            provider
                .send("eth_requestAccounts", [])
                .then((accounts) => {
                    if (accounts.length > 0) setCurrentAccount(accounts[0]);
                })
                .catch((e) => console.log(e));
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const registerFarmer = async(name:string, crop:string, phone_no: string) => {
        try {
            if(!window.ethereum){
              console.log("Please Install Metamask");
              return
            }
        
            const SupplyChainContract = await getEthereumContract();
        
            await SupplyChainContract.addFarmer(name, crop, phone_no).then((res) => console.log(res));
        
            console.log("farmer registerd");
          } catch (error) {
            console.log(error);
          }
    }
    const AddCropDetails = async(cropname:string, typeofcrop: string, area: number, cropquantity: number) => {
        try {
            if(!window.ethereum){
              console.log("Please Install Metamask");
              return
            }
        
            const SupplyChainContract = await getEthereumContract();
        
            await SupplyChainContract.addCropDetails(cropname, typeofcrop, area, cropquantity).then((res) => console.log(res));

            await SupplyChainContract.getAllCrops().then((res) => {
                res.map((data:any) => console.log('-->', data))
                })

            await SupplyChainContract.idtoDetails(1).then((res) => console.log(res));

            // await SupplyChainContract.changeowner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',1, 800)

            // await SupplyChainContract.addresstocrops(currentAccount, 1).then((res) => console.log(res));
        
            console.log("details added");
          } catch (error) {
            console.log(error);
          }
    }
    const GetCropById = async(id: number) => {
        try {
            if(!window.ethereum){
              console.log("Please Install Metamask");
              return
            }
        
            const SupplyChainContract = await getEthereumContract();

            await SupplyChainContract.idtoDetails(1).then((res) => setCropDetails(res));

            console.log(" Here id details of id: ", id);
          } catch (error) {
            console.log(error);
          }
    }

    const getFarmerDetails = async() => {
        try {
            if(!window.ethereum){
              console.log("Please Install Metamask");
              return
            }
        
            const SupplyChainContract = await getEthereumContract();
        
            const value = await SupplyChainContract.addresstofarmer(currentAccount).then((res) => console.log(res));
        
            console.log(value);
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <SupplyChainContext.Provider
        value={{ connectWallet,registerFarmer, getFarmerDetails,AddCropDetails, GetCropById, currentAccount, balance, chainId, chainname, data, cropDetails }}>
           {children}
       </SupplyChainContext.Provider>
   );

}