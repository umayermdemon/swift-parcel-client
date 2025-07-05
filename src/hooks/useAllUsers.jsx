import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch,isLoading } = useQuery({
    queryKey: ["users"],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get("/users/User");
      return res.data;
    },
  });
  return [users, refetch,isLoading];
};

export default useAllUsers;
