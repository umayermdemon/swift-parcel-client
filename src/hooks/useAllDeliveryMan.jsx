import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: deliveryMan = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["deliveryMan"],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get("/users/Delivery Man");
      return res.data;
    },
  });
  return [deliveryMan, refetch, isLoading];
};

export default useAllDeliveryMan;
