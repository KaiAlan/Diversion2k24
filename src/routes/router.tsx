import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Prediction from "@/components/NavBar/Services/Prediction";
import Contact from "@/components/NavBar/Services/Contact";
import Transportation from "@/components/NavBar/Services/Transportation";
import ComunityForum from "@/components/NavBar/ComunityForum/ComunityForum";
// import Home from "@/components/Home/Home";
// import About from "@/components/About/About";
import ProductTracking from "@/components/SupplyChain/ProductTracking";
import UserInterface from "@/components/NavBar/ComunityForum/UserInterface";
import Dashboard from "@/components/NavBar/ComunityForum/Dashboard";
import ComunityForum2 from "@/components/NavBar/ComunityForum/ComunityForum2";
import Docs from "@/components/Docs/Docs";
import Transparency from "@/components/SupplyChain/Transparency";
import Authentication from "@/components/SupplyChain/Authentication";
import Home2 from '@/components/Home/Hom2';
import Home3 from "@/components/Home/Home3";
import Home from "@/components/Home/Home";
import TransferCrop from "@/components/SupplyChain/TransferCrop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      //Home Page
      {
        path: "/",
        element: <Home />,
        // element: <Home2 />,
      },
      // About
      {
        path: "/docs",
        element: <Docs />,
      },
      //services routing
      {
        path: "/prediction",
        element: <Prediction />,
      },
      {
        path: "/transportaion",
        element: <Transportation />,
        children: [
          {
            path: "/transportaion/product-tracking",
            element: <ProductTracking />,
          },
          {
            path: "/transportaion/user-interface",
            element: <UserInterface />,
          },
          {
            path: "/transportaion/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/transportaion/transparency",
            element: <Transparency />,
          },
          {
            path: "/transportaion/authentication",
            element: <Authentication />,
          },
          {
            path: "/transportaion/tnasfer-crop",
            element: <TransferCrop />,
          },
        ]
      },
      // website contact route
      {
        path: "/contacts",
        element: <Contact />,
      },
      // community
      {
        path: "community",
        element: <ComunityForum />,
      },
    ],
  },
]);
