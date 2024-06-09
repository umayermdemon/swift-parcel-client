import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSingleUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users } = useQuery({
    queryKey: [user?.email, "users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      return res.data;
    },
  });
  return [users]
};

export default useSingleUser;