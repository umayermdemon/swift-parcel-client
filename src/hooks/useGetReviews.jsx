import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useSingleUser from "./useSingleUser";


const useGetReviews = () => {
  const axiosSecure = useAxiosSecure();
  const [users] = useSingleUser();
  const { data: reviews,isLoading } = useQuery({
    queryKey: [users?._id,"reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${users?._id}`);
      return res.data;
    },
  });
  return [reviews,isLoading];
};

export default useGetReviews;