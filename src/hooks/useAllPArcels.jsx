import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllPArcels = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] , refetch} = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels");
      return res.data;
    },
  });
  return [parcels, refetch]
};

export default useAllPArcels;