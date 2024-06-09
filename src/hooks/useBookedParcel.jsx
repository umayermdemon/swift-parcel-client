import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBookedParcel = () => {
  const axiosSecure=useAxiosSecure()
  const {data:bookedParcel=[],refetch}=useQuery({
    queryKey:[ 'bookedParcel'],
    queryFn: async ()=>{
      const res= await axiosSecure.get(`/parcels/parcel/Pending`)
      return res.data
    }
  })
  return [bookedParcel,refetch]
};

export default useBookedParcel;