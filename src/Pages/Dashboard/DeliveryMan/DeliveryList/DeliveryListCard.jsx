import { Button, Typography } from "@material-tailwind/react";
import { MdOutlineCancel } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LocationModal from "../../../../Components/LocationModal/LocationModal";
import "leaflet/dist/leaflet.css";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";

const DeliveryListCard = ({ item, isLast, refetch }) => {
  const [modalLatLng, setModalLatLng] = useState(null);
  const axiosSecure = useAxiosSecure();
  const {
    approximateDeliveryDate,
    name,
    parcelDeliveryAddress,
    phoneNumber,
    receiversName,
    receiversPhoneNumber,
    requestedDeliveryDate,
    status,
    _id,
    deliveryAddressLatitude,
    deliveryAddressLongitude,
  } = item || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";
  const handleDeliver = (id) => {
    const deliverInfo = {
      status: "Delivered",
    };
    axiosSecure.patch(`/parcels/deliver/${id}`, deliverInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Parcel Delivered Successfully");
      }
    });
  };
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this!",
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
        axiosSecure
          .patch(`/parcels/deliver/cancel/${id}`, cancelInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Canceled!",
                text: "Your delivery has been canceled.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  const openModalWithLatLng = (lat, lng) => {
    setModalLatLng([lat, lng]);
  };
  return (
    <>
      <tr key={_id}>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {name}
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {receiversName}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {phoneNumber}
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
            {requestedDeliveryDate}
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal flex flex-row items-center justify-center gap-1"
          >
            {approximateDeliveryDate}
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <Typography variant="small" color="blue-gray" className="font-medium">
            {receiversPhoneNumber}
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal flex flex-row items-center justify-center gap-1"
          >
            {parcelDeliveryAddress}
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <Typography variant="small" color="blue-gray" className="font-medium">
            <button
              className="btn"
              onClick={() =>
                openModalWithLatLng(
                  deliveryAddressLatitude,
                  deliveryAddressLongitude
                )
              }
            >
              <FaSearchLocation />
            </button>
            <LocationModal
              modalLatLng={modalLatLng}
              setModalLatLng={setModalLatLng}
            />
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal flex flex-row items-center justify-center gap-1"
          >
            <button
              disabled={status === "Delivered" || status === "Cancel"}
              className="cursor-pointer"
              onClick={() => handleCancel(_id)}
            >
              {status === "Cancel" ? (
                <p className="text-red-300 font-bold text-base">Canceled</p>
              ) : (
                <MdOutlineCancel className="text-xl text-red-500 mx-auto" />
              )}
            </button>
          </Typography>
        </td>
        <td className={`${classes} bg-blue-gray-50/50`}>
          <Typography variant="small" color="blue-gray" className="font-medium">
            <Button
              disabled={status === "Delivered" || status === "Cancel"}
              className={
                status === "Delivered" ? "bg-green-400" : "bg-blue-600"
              }
              onClick={() => handleDeliver(_id)}
            >
              {status === "Delivered" ? "Delivered" : "Deliver"}
            </Button>
          </Typography>
        </td>
      </tr>
    </>
  );
};

export default DeliveryListCard;
