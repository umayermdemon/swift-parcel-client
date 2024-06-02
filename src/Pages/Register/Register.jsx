/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/Images/Login/register.jpg";
import logo from "../../assets/logo/logo3.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, updateUSerProfile, logOut, googleRegister,githubRegister } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photoUrl;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
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
            title: "Registered successfully",
          });
          updateUSerProfile(name, photo).then().catch();
          logOut();
          navigate("/login");
        }
        reset();
      })
      .catch((error) => {
        console.error(error);
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
            title: "Please provide valid information",
          });
        }
      });
  };

  const handleGoogleRegister = () => {
    googleRegister()
      .then((result) => {
        console.log(result.user);
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
            title: "Registered successfully",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
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
            title: "Something Error",
          });
        }
      });
  };
  const handleGithubRegister = () => {
    githubRegister()
      .then((result) => {
        console.log(result.user);
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
            title: "Registered successfully",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
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
            title: "Something Error",
          });
        }
      });
  };
  return (
    <div className="min-h-screen">
      <img
        src={loginBg}
        alt=""
        className="h-[742px] relative lg:h-[911px] w-full lg:block object-cover"
      />
      <div className="absolute top-12 lg:top-32 right-10 lg:right-80">
        <Card
          color="transparent"
          shadow={false}
          className="ml-16 md:ml-48 lg:ml-0"
        >
          <Link to="/">
            <Typography className=" flex items-center justify-center mb-4 gap-2 font-cinzel text-3xl text-[#0B2D42] cursor-pointer py-1.5 font-bold">
              <img src={logo} alt="" className="w-16" />
              <div className="flex items-center md:text-4xl">
                <p className="text-5xl md:text-7xl">S</p>
                <sub>wift</sub>
              </div>
            </Typography>
          </Link>
          <Typography
            variant="h2"
            color="blue-gray"
            className="text-center text-[#0B2D42] font-bold"
          >
            Register
          </Typography>
          <Typography color="gray" className="mt-1 text-center font-medium">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input
                type="text"
                size="lg"
                label="Enter Your Name"
                required
                {...register("name")}
              />
              <Input
                type="email"
                size="lg"
                label="Enter Your Email"
                required
                {...register("email")}
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
              <Input
                type="text"
                size="lg"
                label="Enter Photo Url"
                required
                {...register("photoUrl")}
              />
            </div>

            <Button
              type="submit"
              className="mt-6 bg-[#F5AB35] text-base"
              fullWidth
            >
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account? Please
              <Link
                to="/login"
                className="font-medium ml-2 text-blue-900 underline"
              >
                Login
              </Link>
            </Typography>
          </form>
        </Card>
        <div className="flex flex-col space-y-4 mt-4 items-center">
          <h1 className="text-xl font-bold">Or Register With....</h1>
          <div className="flex  gap-12 pt-4">
            <FcGoogle
              onClick={handleGoogleRegister}
              className="text-3xl cursor-pointer"
            />
            <FaGithub onClick={handleGithubRegister} className="text-3xl cursor-pointer" />
            <FaFacebook className="text-3xl cursor-pointer text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
