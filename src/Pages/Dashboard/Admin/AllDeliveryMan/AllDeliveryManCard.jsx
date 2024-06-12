import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const AllDeliveryManCard = ({ user, isLast }) => {
  const axiosPublic=useAxiosPublic()
  const { name, _id, phoneNumber } = user || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";

  const { data: deliveredParcels = [] } = useQuery({
    queryKey: [_id, "deliveredParcels"],
    enabled: !!_id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/parcels/parcelDelivered/${_id}`);
      return res.data;
    },
  });
  const { data: reviews = [] } = useQuery({
    queryKey: [_id, "reviews"],
    enabled: !!_id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${_id}`);
      return res.data;
    },
  });

  const filteredDeliveredParcels=deliveredParcels.filter(parcel=>parcel.status ==="Delivered")
  const totalRating = reviews.reduce(
    (total, review) => total + review.rating,
    0
  );
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  return (
    <tr key={_id}>
      <td className={classes}>
        <Typography variant="h6" color="blue-gray" className="font-normal">
          {name}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography variant="h6" color="blue-gray" className="font-normal">
          {phoneNumber}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="h6" color="blue" className="font-normal">
          {filteredDeliveredParcels.length}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography
          variant="h6"
          className="font-medium text-[#28a745]"
        >
          {averageRating.toFixed(2)}
        </Typography>
      </td>
    </tr>
  );
};

export default AllDeliveryManCard;
