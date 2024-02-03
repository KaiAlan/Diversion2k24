import { useForm, SubmitHandler } from "react-hook-form";
import { ethers } from "ethers";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Inputs = {
  example: string;
  exampleRequired: string;
};

declare var window: any;

const SelectIdentity = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] dark:text-white">
        <SelectValue placeholder="Select a Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Who are you</SelectLabel>
          <SelectItem value="Farmer">Farmer</SelectItem>
          <SelectItem value="Distributor">Distributor</SelectItem>
          <SelectItem value="Retailer">Retailer</SelectItem>
          <SelectItem value="Consumer">Consumer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const Authentication = () => {
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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

//   useEffect(() => {
//     connectWallet();
//   }, [currentAccount]);

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-emerald-200 to-green-50 min-h-screen w-full">
        {!currentAccount && (
        <div className="absolute flex justify-center items-center w-full h-full bg-white z-10">
            <button
              className="text-normal bg-green-500 text-white font-semibold p-1 w-1/6 h-12 border-2 rounded-xl mt-5"
              onClick={() => connectWallet()}
            >
              connect wallet
            </button>
          </div>
        )}
      <div className=" flex flex-col justify-center items-center h-screen w-full gap-5">
        <div className="w-full md:w-2/3 lg:w-1/3 h-4/5 bg-white bg-opacity-50 border-2 border-white rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center p-5 w-full h-full gap-3"
          >
            <h1 className="font-semibold text-3xl text-black">Get Started</h1>
            <p className=" text-black text-sm text-wrap font-light pr-20 pb-5">
              This faucet transfers Test Tokens and Gas Tokens on Polygon PoS
              and zkEVM testnets and its parent chain (Goerli). Confirm details
              before submitting{" "}
            </p>

            <SelectIdentity />

            <label className="font-semibold text-xl">Example Field</label>
            <input
              placeholder="Test"
              {...register("example")}
              className="bg-white text-black p-1 pl-5 w-full h-12 border-1 rounded-sm"
            />
            <label className="font-semibold text-xl pt-3">Amount</label>
            <input
              placeholder="Test Required"
              className="bg-white text-normal text-black p-1 pl-5 w-full h-12 rounded-sm"
              {...register("exampleRequired", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <label className="font-semibold text-xl pt-3">Wallet Address</label>
            <input
              placeholder="Test"
              {...register("example")}
              className="bg-white text-black p-1 pl-5 w-full h-12 border-1 rounded-sm"
            />
            <button
              className="text-normal bg-green-500 text-white font-semibold p-1 w-full h-12 border-2 rounded-sm"
              type="submit"
            >
              Register Yourself
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Authentication;
