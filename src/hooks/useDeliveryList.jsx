import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useSingleUser from "./useSingleUser";

const useDeliveryList = () => {
  const axiosSecure = useAxiosSecure();
  const [users] = useSingleUser();
  const {
    data: deliveryList = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [users?._id, "deliveryList"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/deliveryMan/${users?._id}`);
      return res.data;
    },
  });
  return [deliveryList, refetch, isLoading];
};

export default useDeliveryList;
