/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import loginBg from "../../assets/Images/Login/login.jpg";
import logo from "../../assets/logo/logo3.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex gap-48 items-center">
      <img
        src={loginBg}
        alt=""
        className="h-[815px] lg:h-[911px] w-1/2 hidden lg:block"
      />
      <div>
        <Card color="transparent" shadow={false} className="ml-12 md:ml-48 lg:ml-0"> 
          <Typography className=" flex items-center justify-center mb-8 gap-2 font-cinzel text-3xl text-[#0B2D42] cursor-pointer py-1.5 font-bold">
            <img src={logo} alt="" className="w-16" />
            <div className="flex items-center md:text-4xl">
              <p className="text-5xl md:text-7xl">S</p>
              <sub>wift</sub>
            </div>
          </Typography>
          <Typography
            color="blue-gray"
            className="text-center text-[#0B2D42] text-3xl md:text-4xl font-bold"
          >
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-medium text-center">
            <span className="hidden md:inline-block">Nice to meet you!</span> Enter your email & password to login.
          </Typography>
          <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Input type="email" size="lg" label="Enter Your Email" />
              <Input type="password" size="lg" label="Enter Your Password" />
            </div>

            <Button type="submit" className="mt-6 bg-[#F5AB35] text-base" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account? 
              <Link to='/register' className="font-medium ml-2 text-blue-900 underline">
                Create an Account
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
