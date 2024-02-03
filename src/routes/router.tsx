import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Prediction from "@/components/NavBar/Services/Prediction";
import Contact from "@/components/NavBar/Services/Contact";
// import Transportation from "@/components/NavBar/Services/Transportation";
import ComunityForum from "@/components/NavBar/ComunityForum/ComunityForum";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import ProductTracking from "@/components/SupplyChain/ProductTracking";
import UserInterface from "@/components/NavBar/ComunityForum/UserInterface";
import Dashboard from "@/components/NavBar/ComunityForum/Dashboard";

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
      },
      // About
      {
        path: "/about",
        element: <About />,
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
