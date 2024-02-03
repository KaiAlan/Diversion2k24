import { useForm, SubmitHandler } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area"


type Inputs = {
  example: string;
  exampleRequired: string;
};

const Transparency = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-emerald-200 to-green-50 min-h-screen w-full">
      <div className=" flex flex-col justify-center items-center h-screen w-full gap-5">
        <div className="w-full md:w-2/3 lg:w-1/3 h-4/5 bg-white bg-opacity-50 border-2 border-white rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center h-full w-full p-5 gap-3"
          >
            <h1 className="font-semibold text-3xl text-black">
              Add Your Crop Details
            </h1>
            <p className=" text-black text-sm text-wrap font-light pr-20 pb-5">
              This faucet transfers Test Tokens and Gas Tokens on Polygon PoS
              and zkEVM testnets and its parent chain (Goerli). Confirm details
              before submitting{" "}
            </p>

            <ScrollArea>
              <div className="flex flex-col justify-center items-start gap-3 h-3/5">

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
            <label className="font-semibold text-xl pt-3">Wallet Address</label>
            <input 
            placeholder="Test"
            {...register("example")}
            className="bg-white text-black p-1 pl-5 w-full h-12 border-1 rounded-sm"
            />
            <label className="font-semibold text-xl pt-3">Wallet Address</label>
            <input 
            placeholder="Test"
            {...register("example")}
            className="bg-white text-black p-1 pl-5 w-full h-12 border-1 rounded-sm"
            />
              </div>
            </ScrollArea>
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

export default Transparency;
