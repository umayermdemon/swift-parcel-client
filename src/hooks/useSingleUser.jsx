import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users, isLoading } = useQuery({
    queryKey: [user?.email, "users"],
    enabled: !!localStorage.getItem("access-token") && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      return res.data;
    },
  });
  return [users, isLoading];
};

export default useSingleUser;
