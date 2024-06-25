import { Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdOutlineCancel } from "react-icons/md";
import MyParcelUpdateModal from "../../../../Components/MyParcelUpdateModal/MyParcelUpdateModal";
import Swal from "sweetalert2";
import ReviewsModal from "./ReviewsModal";
import Payment from "../Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const MyParcelCard = ({ user, isLast, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    parcelType,
    requestedDeliveryDate,
    approximateDeliveryDate,
    bookingDate,
    deliveryManId,
    status,
    price,
    payment_status,
    _id,
    trans_id
  } = user || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const cancelInfo = {
          status: "Cancel",
        };
        axiosSecure.patch(`/parcels/cancel/${id}`, cancelInfo).then((res) => {
          refetch();
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Canceled!",
              text: "Your booking has been canceled.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

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
          className="font-medium"
        >
          {trans_id}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className={
            status === "Pending"
              ? "bg-orange-300 p-1 rounded-md"
              : status === "On The Way"
              ? "bg-blue-300 p-1 rounded-md text-white"
              : status === "Cancel"
              ? "bg-red-300 p-1 rounded-md text-white"
              : "bg-green-300 p-1 rounded-md text-white"
          }
        >
          {status}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          <button>
            <MyParcelUpdateModal
              status={status}
              _id={_id}
              user={user}
              refetch={refetch}
            />
          </button>
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button
            disabled={status != "Pending"}
            onClick={() => handleCancel(_id)}
            className="cursor-pointer"
          >
            <MdOutlineCancel
              className={
                status != "Pending"
                  ? "text-xl text-red-200 mx-auto"
                  : "text-xl text-red-700 mx-auto"
              }
            />
          </button>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          <button>
            <ReviewsModal status={status} deliveryManId={deliveryManId} />
          </button>
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button>
            <Elements stripe={stripePromise}>
              <Payment
                price={price}
                refetch={refetch}
                payment_status={payment_status}
                _id={_id}
                status={status
                }
              />
            </Elements>
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default MyParcelCard;
