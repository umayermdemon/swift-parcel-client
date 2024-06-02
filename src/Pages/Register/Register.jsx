/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import loginBg from "../../assets/Images/Login/register.jpg";
import logo from "../../assets/logo/logo3.png";
import { useForm } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUSerProfile } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

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
            <Typography className=" flex items-center justify-center mb-4 gap-2 font-cinzel text-3xl text-[#0B2D42] cursor-pointer py-1.5 font-bold">
              <img src={logo} alt="" className="w-16" />
              <div className="flex items-center md:text-4xl">
                <p className="text-5xl md:text-7xl">S</p>
                <sub>wift</sub>
              </div>
            </Typography>
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
                <Input
                  type="password"
                  size="lg"
                  label="Enter Your Password"
                  required
                  {...register("password")}
                />
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
        </div>
    </div>
  );
};

export default Register;
