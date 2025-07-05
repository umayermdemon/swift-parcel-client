import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRegisteredUser = () => {
  const axiosPublic = useAxiosPublic()
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/registeredUser");
      return res.data;
    },
  });
  return [users, refetch];
};

export default useRegisteredUser;