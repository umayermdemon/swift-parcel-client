import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TopDeliveryManCard from "./TopDeliveryManCard";
import { useEffect, useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";

const TopDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();
  const roleInfo = {
    role: "Delivery Man",
  };

  const { data: deliveryMans = [], isLoading } = useQuery({
    queryKey: [roleInfo.role, "deliveryMan"],
    enabled: !!roleInfo.role,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/deliverymanRole/${roleInfo.role}`);
      return res.data;
    },
  });
  // console.log(deliveryMans)
  const [sortedDeliveryMan, setSortedDeliveryMan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const deliveryManData = await Promise.all(
        deliveryMans.map(async (deliveryMan) => {
          const getParcels = await axiosPublic.get(
            `/parcels/parcelDelivered/${deliveryMan._id}`
          );
          const getReviews = await axiosPublic.get(
            `/reviews/${deliveryMan._id}`
          );
          const parcels = getParcels.data;
          const filteredParcels=parcels.filter(parcel=>parcel.status==="Delivered")
          const reviews = getReviews.data;
          const image = deliveryMan.image;
          const totalRating = reviews.reduce(
            (total, review) => total + review.rating,
            0
          );
          const averageRating =
            reviews.length > 0 ? totalRating / reviews.length : 0;
          return {
            ...deliveryMan,
            deliveredParcels: filteredParcels.length,
            averageRating: averageRating.toFixed(2),
            image,
          };
        })
      );

      const sortedData = deliveryManData.sort((a, b) => {
        if (b.deliveredParcels === a.deliveredParcels) {
          return b.averageRating - a.averageRating;
        }
        return b.deliveredParcels - a.deliveredParcels;
      });

      setSortedDeliveryMan(sortedData.slice(0, 3));
    };

    if (deliveryMans.length > 0) {
      fetchData();
    }
  }, [deliveryMans, axiosPublic]);

  if (isLoading) {
    return (
      <div className="w-full flex items-center text-5xl justify-center text-center">
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rotating-triangles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="mb-8 md:mb-12">
      <SectionTitle heading={"Top Delivery Man"} />
      <div className="grid lg:max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-2 lg:mx-auto">
        {sortedDeliveryMan.map((item, idx) => (
          <TopDeliveryManCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;
