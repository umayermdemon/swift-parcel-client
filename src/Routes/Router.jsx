import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

export const router=createBrowserRouter([
 {
  path:'/',
  element:<Layout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',
      element:<Home/>
    }
  ]
 }
])