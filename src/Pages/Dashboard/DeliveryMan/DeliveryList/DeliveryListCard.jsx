import { Button, Typography } from "@material-tailwind/react";
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
/*
approximateDeliveryDate
bookingDate
deliveryAddressLatitude
deliveryAddressLongitude
deliveryManId
email
name
parcelDeliveryAddress
parcelType
parcelWeight
phoneNumber
price
receiversName
receiversPhoneNumber
requestedDeliveryDate
status
_id
 */

const DeliveryListCard = ({ item, isLast }) => {
  const {
    approximateDeliveryDate,
    name,
    parcelDeliveryAddress,
    phoneNumber,
    receiversName,
    receiversPhoneNumber,
    requestedDeliveryDate,
    _id,
  } = item || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";
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
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <button>
            <FaSearchLocation/>
          </button>
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal flex flex-row items-center justify-center gap-1"
        >
           <button
            className="cursor-pointer"
          >
            <MdOutlineCancel className="text-xl text-red-500 mx-auto" />
          </button>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <Button className="bg-green-400">
            Deliver
          </Button>
        </Typography>
      </td>
    </tr>
  );
};

export default DeliveryListCard;
