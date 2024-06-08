import { Typography } from "@material-tailwind/react";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { toast } from "react-toastify";
import { MdOutlineCancel, MdReviews } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import MyParcelUpdateModal from "../../../../Components/MyParcelUpdateModal/MyParcelUpdateModal";

const MyParcelCard = ({ user, isLast,refetch }) => {
  // const axiosSecure = useAxiosSecure();
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
    console.log(id)
  };
  // const handleDeliveryMan = (id) => {
  //   axiosSecure(`/users/deliveryMan/${id}`).then((res) => {
  //     refetch();
  //     if (res.data.modifiedCount > 0) {
  //       toast.success(`set as a Delivery Man`);
  //     }
  //   });
  // };
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
        <Typography color="blue-gray" >
            <button onClick={()=>handleUpdate(_id)}>
            <MyParcelUpdateModal status={status} _id={_id} user={user} refetch={refetch} />
            </button>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          {/* <button onClick={() => handleDeliveryMan(_id)}>
            <MdOutlineCancel className="text-xl mx-auto" />
          </button> */}
          <button>
            <MdOutlineCancel className="text-xl text-red-500 mx-auto" />
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
          <button>
            <RiSecurePaymentFill className="text-xl mx-auto" />
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default MyParcelCard;
