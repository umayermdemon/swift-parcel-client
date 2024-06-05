import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        logOut();
        navigate("/login");
        //
      }
      toast.error("Your Session is expired. Please Login"
    );

      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
