import { Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";
import useBookedParcel from "../../../../hooks/useBookedParcel";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel, MdReviews } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const MyParcelCard = ({ user, isLast, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [bookedParcel] = useBookedParcel();
  console.log(bookedParcel);
  const {
    parcelType,
    requestedDeliveryDate,
    approximateDeliveryDate,
    bookingDate,
    deliveryManId,
    status,
    _id,
  } = user || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";
  const handleUpdate = (id) => {
    axiosPublic.patch(`/parcels/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        toast.success(`set as an Admin`);
      }
    });
  };
  const handleDeliveryMan = (id) => {
    axiosPublic.patch(`/users/deliveryMan/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        toast.success(`set as a Delivery Man`);
      }
    });
  };
  return (
    <tr key={_id}>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {parcelType}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {requestedDeliveryDate}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {approximateDeliveryDate}
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
          {bookingDate}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal flex flex-row items-center justify-center gap-1"
        >
          {deliveryManId}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className={
            status === "Pending"
              ? "bg-orange-300 p-1 rounded-md"
              : "bg-green-300 p-1 rounded-md text-white"
          }
        >
          {status}
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button onClick={() => handleUpdate(_id)}>
            <FaEdit className="text-xl" />
          </button>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          <button onClick={() => handleDeliveryMan(_id)}>
            <MdOutlineCancel className="text-xl mx-auto" />
          </button>
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button onClick={() => handleUpdate(_id)}>
            <MdReviews className="text-xl" />
          </button>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          <button onClick={() => handleDeliveryMan(_id)}>
            <RiSecurePaymentFill className="text-xl mx-auto" />
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default MyParcelCard;
