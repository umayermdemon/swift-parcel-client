import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMan = [], refetch } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/Delivery Man");
      return res.data;
    },
  });
  return [deliveryMan, refetch];
};

export default useAllDeliveryMan;
