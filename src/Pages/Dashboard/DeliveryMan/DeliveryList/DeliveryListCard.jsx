import { Button, Typography } from "@material-tailwind/react";
import { MdOutlineCancel } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const DeliveryListCard = ({ item, isLast, refetch }) => {
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
  const handleCancel=id=>{
    console.log(id)
  }
  return (
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
          <button>
            <FaSearchLocation />
          </button>
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal flex flex-row items-center justify-center gap-1"
        >
          <button className="cursor-pointer" onClick={()=>handleCancel(_id)}>
            <MdOutlineCancel className="text-xl text-red-500 mx-auto" />
          </button>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography variant="small" color="blue-gray" className="font-medium">
          <Button
            disabled={status === "Delivered"}
            className={status === "Delivered" ? "bg-green-400" : "bg-blue-600"}
            onClick={() => handleDeliver(_id)}
          >
            Deliver
          </Button>
        </Typography>
      </td>
    </tr>
  );
};

export default DeliveryListCard;
