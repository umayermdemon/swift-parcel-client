import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBookedParcel = () => {
  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const {data:bookedParcel=[]}=useQuery({
    queryKey:[user?.email, 'bookedParcel'],
    queryFn: async ()=>{
      const res= await axiosSecure.get(`/parcels/${user?.email}`)
      return res.data
    }
  })
  return [bookedParcel]
};

export default useBookedParcel;