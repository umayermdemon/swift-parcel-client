import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] , refetch,isLoading} = useQuery({
    queryKey: ["parcels"],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels");
      return res.data;
    },
  });
  return [parcels, refetch,isLoading]
};

export default useAllParcels;