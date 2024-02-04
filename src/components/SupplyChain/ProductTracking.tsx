import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

import { useContext } from "react";
import { SupplyChainContext, SupplyChainContextType } from "@/Context/SupplyChainContext";

const ProductTracking = () => {

  const { GetCropById, cropDetails } = useContext(SupplyChainContext) as SupplyChainContextType;
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-green-600 text-white dark:bg-green-800">
        <div className="container mx-auto px-4 py-6" />
      </div>
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Track Your Product</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get real-time updates on your product's location and status as it
            moves from the farm to the market.
          </p>
          <form className="flex space-x-4">
            <Input className="flex-grow" placeholder="Enter product ID" />
            <Button>Track</Button>
          </form>
        </section>
        <button onClick={() => GetCropById(0)}>Test</button>
        <div className="flex flex-col justify-center items-center">

        {
          cropDetails?.map((data) => (
            <ul>

              <li>{data} <br /></li>
              <p>  </p>
            </ul>
          ))
        }
        </div>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Supply Chain Transparency</h2>
          <p className="text-gray-600 dark:text-gray-400">
            View transparent information about each stage of the supply chain,
            from cultivation to distribution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Cultivation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Information about the cultivation process, including the use
                  of fertilizers and pesticides.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Harvesting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Details about the harvesting process, including the date and
                  method of harvest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Information about the processing of the product, including any
                  treatments or modifications it undergoes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Details about the distribution of the product, including
                  transportation methods and storage conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Blockchain Verification</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Verify the authenticity of your product and ensure data integrity
            using our blockchain technology.
          </p>
          <Button className="w-full md:w-auto dark:text-white" variant="outline">
            Verify Product
          </Button>
        </section>
      </main>
      {/* <Separator className="my-4" /> */}
    </div>
  );
};

export default ProductTracking;
