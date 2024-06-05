import { Typography } from "@material-tailwind/react";
import { RiAdminFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const AllUsersCard = ({ user, isLast, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { name, role, _id } = user || {};
  const classes = isLast
    ? "p-4 text-center"
    : "p-4 border-b text-center border-blue-gray-50";

  //  const [parcels]=useAllPArcels()
  //  const filtered= parcels.filter((parcel)=>(parcel.email==='mamudmdemon@gmail.com'))
  //  console.log(filtered)

  const handleAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        toast.success(`${name} set as an Admin`);
      }
    });
  };
  const handleUser = (id) => {
    axiosSecure.patch(`/users/user/${id}`).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        toast.success(`${name} set as a User`);
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
    <tr key={name}>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {name}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          phone
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
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal flex flex-row items-center justify-center gap-1"
        >
          {role} 
          {role === "Admin" && <RiAdminFill />}
          {role === "User" && <FaUser className="text-gray-400"/>}
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
      <td className={`${classes} bg-blue-gray-50/50`}>
        <Typography color="blue-gray">
          <button onClick={() => handleUser(_id)}>
            <FaUser className="text-lg mx-auto " />
          </button>
        </Typography>
      </td>
    </tr>
  );
};

export default AllUsersCard;
