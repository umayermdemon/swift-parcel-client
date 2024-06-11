/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import loginBg from "../../assets/Images/Login/login.jpg";
import logo from "../../assets/logo/logo3.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Logged in successfully",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        if (error) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "Please Provide Valid Email & Password",
          });
        }
      });
  };
  return (
    <div className="min-h-screen ">
      <img
        src={loginBg}
        alt=""
        className="h-[742px] relative lg:h-[911px] w-full lg:block object-cover"
      />
      <div className="absolute top-20 md:top-16 bg-white p-4  md:p-8 rounded-md lg:top-44 right-8 lg:right-72">
        <Card color="transparent" shadow={false}>
          <Link to="/">
            <div className=" flex items-center justify-center mb-4 gap-2 font-cinzel text-3xl text-[#0B2D42] cursor-pointer py-1.5 font-bold">
              <img src={logo} alt="" className="w-16" />
              <div className="flex items-center md:text-4xl">
                <h2 className="text-5xl md:text-7xl">S</h2>
                <sub>wift</sub>
              </div>
            </div>
          </Link>
          <Typography
            color="blue-gray"
            className="text-center text-[#0B2D42] text-3xl md:text-4xl font-bold"
          >
            Login
          </Typography>
          <Typography
            color="gray"
            className="mt-4 font-medium text-black text-center"
          >
            <span className="hidden  md:inline-block text-lg">
              Nice to meet you!
            </span>
            <br />
            Enter your email & password to login.
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input
                type="email"
                {...register("email")}
                size="lg"
                label="Enter Your Email"
              />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  {...register("password")}
                  label="Enter Your Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-3"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="mt-6 bg-[#F5AB35] text-base"
              fullWidth
            >
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?
              <Link
                to="/register"
                className="font-medium ml-2 text-blue-900 underline"
              >
                Create an Account
              </Link>
            </Typography>
          </form>
        </Card>
        <h1 className="text-xl font-bold text-center">Or Login With....</h1>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
