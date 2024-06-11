import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TopDeliveryManCard from "./TopDeliveryManCard";

const TopDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();
  const roleInfo = {
    status: "Delivery Man",
  };
  const { data: deliveryMan = [], isLoading } = useQuery({
    queryKey: [roleInfo.status,"deliveryMan"],
    enabled:!! roleInfo.status,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/deliveryMan/${roleInfo.status}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <div>......</div>;
  }
  console.log(deliveryMan);
  return (
    <div>
      <SectionTitle heading={"Top Delivery Man"} />\
      {deliveryMan.map((item, idx) => (
        <TopDeliveryManCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default TopDeliveryMan;
