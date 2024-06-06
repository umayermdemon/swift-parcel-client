import { Typography } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllDeliveryManCard = ({ user, isLast, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { name, _id,phoneNumber } = user || {};
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
  return (
    <tr key={name}>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {name}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {phoneNumber}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          booked parcel count
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          Total spent
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button onClick={() => handleDelete(_id)}>
            <MdDelete className="text-xl mx-auto" />
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default AllDeliveryManCard;
