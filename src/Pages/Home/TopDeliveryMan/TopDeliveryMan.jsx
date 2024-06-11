import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TopDeliveryManCard from "./TopDeliveryManCard";
import { useEffect, useState } from "react";

const TopDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();
  const roleInfo = {
    status: "Delivery Man",
  };

  const { data: deliveryMen = [], isLoading: deliveryMenLoading } = useQuery({
    queryKey: [roleInfo.status, "deliveryMan"],
    enabled: !!roleInfo.status,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/users/deliverymanRole/${roleInfo.status}`
      );
      return res.data;
    },
  });
console.log(deliveryMen)
  const [sortedDeliveryMen, setSortedDeliveryMen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const deliveryMenData = await Promise.all(
        deliveryMen.map(async (deliveryMan) => {
          const parcelsRes = await axiosPublic.get(
            `/parcels/parcelDelivered/${deliveryMan._id}`
          );
          const reviewsRes = await axiosPublic.get(
            `/reviews/${deliveryMan._id}`
          );
          const parcels = parcelsRes.data;
          const reviews = reviewsRes.data;
          const image=deliveryMan.image;
          const totalRating = reviews.reduce(
            (total, review) => total + review.rating,
            0
          );
          const averageRating =
            reviews.length > 0 ? totalRating / reviews.length : 0;
          return {
            ...deliveryMan,
            deliveredParcels: parcels.length,
            averageRating:averageRating.toFixed(2),
            image
          };
        })
      );

      const sortedData = deliveryMenData.sort((a, b) => {
        if (b.deliveredParcels === a.deliveredParcels) {
          return b.averageRating - a.averageRating;
        }
        return b.deliveredParcels - a.deliveredParcels;
      });

      setSortedDeliveryMen(sortedData.slice(0, 3));
    };

    if (deliveryMen.length > 0) {
      fetchData();
    }
  }, [deliveryMen, axiosPublic]);

  if (deliveryMenLoading) {
    return <div>......</div>;
  }
  console.log(sortedDeliveryMen);


  return (
    <div className="mb-8 md:mb-12">
      <SectionTitle heading={"Top Delivery Man"} />\
      <div className="grid lg:max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-2 lg:mx-auto">
        {sortedDeliveryMen.map((item, idx) => (
          <TopDeliveryManCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;
