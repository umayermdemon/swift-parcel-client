import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useSingleUser from "./useSingleUser";

const useSingleParcel = () => {
  const axiosSecure = useAxiosSecure();
  const [users] = useSingleUser();
  const { data: parcel } = useQuery({
    queryKey: [users?._id,"parcel"],
    enabled: !!localStorage.getItem("access-token") && users?._id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${users?._id}`);
      return res.data;
    },
  });
  return [parcel];
};

export default useSingleParcel;
