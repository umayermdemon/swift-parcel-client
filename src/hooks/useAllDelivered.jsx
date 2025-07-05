import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllDelivered = () => {
  const axiosSecure = useAxiosSecure();
  const deliveredInfo={
    status:"Delivered"
  }
  const { data: deliveredParcels = [] , refetch} = useQuery({
    queryKey: ["deliveredParcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/delivered/${deliveredInfo.status}`);
      return res.data;
    },
  });
  return [deliveredParcels, refetch]
};

export default useAllDelivered;