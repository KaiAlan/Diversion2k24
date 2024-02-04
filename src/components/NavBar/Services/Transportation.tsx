import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Transportation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Product Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Track your products from farm to table.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/transportaion/product-tracking">
                <Button size="sm">Enter</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Secure your supply chain with blockchain technology.
              </p>
            </CardContent>
            <CardFooter>
              <Link to='/transportaion/authentication'>
              <Button size="sm">Enter</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access real-time data on product movement and status.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/transportaion/transparency">
                <Button size="sm">Enter</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Monitor your products in real-time.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/transportaion/dashboard">
                <Button size="sm">Enter</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transfer Your Crop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Integrate your supply chain with blockchain technology.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/transportaion/tnasfer-crop">

              <Button size="sm">Enter</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>User Interface</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access relevant information for farmers, distributors, and
                consumers.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/transportaion/user-interface">
                <Button size="sm">Enter</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Transportation;
