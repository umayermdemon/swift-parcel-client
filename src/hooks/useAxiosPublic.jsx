import axios from "axios";


const axiosPublic=axios.create({
  // baseURL:'http://localhost:5000'
  baseURL:'https://swift-parcel-server-b9a12.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;