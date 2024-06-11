import { Typography } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllDeliveryManCard = ({ user, isLast, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { name, _id, phoneNumber } = user || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";
  const handleDelete = (id) => {
    axiosSecure(`/users/deliveryMan/${id}`).then((res) => {
      refetch();
      if (res.data.deletedCount) {
        toast.success(`${name} deleted from Delivery Man`);
      }
    });
  };

  const { data: deliveredParcels = [] } = useQuery({
    queryKey: [_id, "deliveredParcels"],
    enabled: !!_id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/parcelDelivered/${_id}`);
      return res.data;
    },
  });

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
          {deliveredParcels.length}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography
          as="a"
          href="#"
          variant="h6"
          color="blue-gray"
          className="font-medium"
        >
          Average Review
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button onClick={() => handleDelete(_id)}>
            <MdDelete className="text-xl mx-auto text-red-300" />
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default AllDeliveryManCard;
