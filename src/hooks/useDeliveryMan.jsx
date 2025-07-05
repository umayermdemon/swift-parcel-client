
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useDeliveryMan = () => {
  const axiosSecure=useAxiosSecure();
  const {user}=useAuth()
 
  const {data: isDeliveryMan ,isLoading}=useQuery({
    queryKey:[user?.email,'isDeliveryMan'],
    enabled:!! localStorage.getItem('access-token') && !! user?.email,
    queryFn: async()=>{
      const res= await axiosSecure.get(`/users/deliveryMan/${user?.email}`);
      return res.data.isDeliveryMan;
    }
  })
  return [isDeliveryMan,isLoading]
};

export default useDeliveryMan;