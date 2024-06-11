import { Typography } from "@material-tailwind/react";
import { RiAdminFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const AllUsersCard = ({ user, isLast, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { name, role, _id, phoneNumber, email } = user || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";
  const { data: parcelBooked = [] } = useQuery({
    queryKey: [email, "parcelBooked"],
    enabled: !!email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/bookedParcel/${email}`);
      return res.data;
    },
  });
  console.log(parcelBooked);

  const totalSpent = parcelBooked.reduce(
    (total, parcel) => total + parcel.price,
    0
  );

  const handleAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        toast.success(`${name} set as an Admin`);
      }
    });
  };
  const handleDeliveryMan = (id) => {
    axiosSecure.patch(`/users/deliveryMan/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        toast.success(`${name} set as a Delivery Man`);
      }
    });
  };
  return (
    <tr key={_id}>
      <td className={classes}>
        <Typography variant="h6" color="blue-gray" className="font-medium">
          {name}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography variant="h6" color="blue-gray" className="font-medium">
          {phoneNumber}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="h6" color="blue" className="font-medium">
          {parcelBooked.length}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography
          variant="h6"
          className="font-medium text-[#28a745]"
        >
          {totalSpent}
        </Typography>
      </td>
      <td className={classes}>
        <Typography
          variant="h6"
          color="blue-gray"
          className="font-medium flex flex-row items-center justify-center gap-1"
        >
          {role}
          {role === "Admin" && <RiAdminFill />}
          {role === "User" && <FaUser className="text-gray-400" />}
          {role === "Delivery Man" && <TbTruckDelivery />}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          <button onClick={() => handleAdmin(_id)}>
            <RiAdminFill className="text-xl" />
          </button>
        </Typography>
      </td>
      <td className={classes}>
        <Typography color="blue-gray">
          <button onClick={() => handleDeliveryMan(_id)}>
            <TbTruckDelivery className="text-xl mx-auto" />
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default AllUsersCard;
