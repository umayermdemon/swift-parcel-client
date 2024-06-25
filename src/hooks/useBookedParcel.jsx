import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookedParcel = () => {
  const axiosSecure=useAxiosSecure()
  const {user}=useAuth()
  const {data:bookedParcel=[],refetch,isLoading}=useQuery({
    queryKey:[ 'bookedParcel'],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async ()=>{
      const res= await axiosSecure.get(`/parcels/parcel/${user?.email}`)
      return res.data
    }
  })
  return [bookedParcel,refetch,isLoading]
};

export default useBookedParcel;