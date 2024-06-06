
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useDeliveryMan = () => {
  const axiosSecure=useAxiosSecure();
  const {user}=useAuth()
 
  const {data: isDeliveryMan}=useQuery({
    queryKey:[user?.email,'isDeliveryMan'],
    queryFn: async()=>{
      const res= await axiosSecure.get(`/users/deliveryMan/${user?.email}`);
      console.log(res.data)
      return res.data.isDeliveryMan;
    }
  })
  return [isDeliveryMan]
};

export default useDeliveryMan;