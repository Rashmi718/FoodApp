import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import RestaurantMenu from "../components/RestaurantMenu.js";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router";
import RestaurantCard from "../components/RestaurantCard.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      }
    ]
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },{
    path: "/restaurants/:resId",
    element :<RestaurantMenu/>
  }
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
