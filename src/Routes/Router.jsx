import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import BookParcel from "../Pages/Dashboard/User/BookParcel/BookParcel";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import MyParcel from "../Pages/Dashboard/User/MyParcel/MyParcel";
import UserProfile from "../Pages/Dashboard/User/UserProfile/UserProfile";
export const router=createBrowserRouter([
 {
  path:'/',
  element:<Layout/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
  ]
 },
 {
  path:'/dashboard',
  element:<PrivateRoute><Dashboard/></PrivateRoute>,
  children:[
    {
      path:'userHome',
      element:<UserHome/>
    },
    {
      path:'bookParcel',
      element:<BookParcel/>
    },
    {
      path:'myParcel',
      element:<MyParcel/>
    },
    {
      path:'userProfile',
      element:<UserProfile/>
    },
  ]
 }
])