import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleRegister, githubRegister, facebookRegister } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleRegister = () => {
    googleRegister()
      .then((result) => {
        if (result.user) {
          const userInfo = {
            image: result.user?.photoURL,
            name: result.user?.displayName,
            email: result.user?.email,
            role: "User",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res) {
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
                title: `${
                  location.pathname === "/login"
                    ? "Logged in successfully"
                    : "Registered successfully"
                } `,
              });
            }
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
            title: "Something Error",
          });
        }
      });
  };
  const handleGithubRegister = () => {
    githubRegister()
      .then((result) => {
        if (result.user) {
          const userInfo = {
            image: result.user?.photoURL,
            name: result.user?.displayName,
            email: result.user?.email,
            role: "User",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res) {
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
                title: `${
                  location.pathname === "/login"
                    ? "Logged in successfully"
                    : "Registered successfully"
                } `,
              });
            }
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
            title: "Something Error",
          });
        }
      });
  };
  const handleFacebookRegister = () => {
    facebookRegister()
      .then((result) => {
        if (result.user) {
          const userInfo = {
            image: result.user?.photoURL,
            name: result.user?.displayName,
            email: result.user?.email,
            role: "User",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res);
            if (res) {
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
                title: `${
                  location.pathname === "/login"
                    ? "Logged in successfully"
                    : "Registered successfully"
                } `,
              });
            }
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
            title: "Something Error",
          });
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 mt-4 items-center">
        <hr className="border border-black w-72" />
        <div className="flex  gap-12 pt-4">
          <FcGoogle
            onClick={handleGoogleRegister}
            className="text-3xl cursor-pointer"
          />
          <FaGithub
            onClick={handleGithubRegister}
            className="text-3xl cursor-pointer"
          />
          <FaFacebook
            onClick={handleFacebookRegister}
            className="text-3xl cursor-pointer text-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
