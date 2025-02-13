import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Slider from "./pages/Slider";
import RootLayout from "./layout/Rotlayout";
import SalesCard from "./pages/SalesCard";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
