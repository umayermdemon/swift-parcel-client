import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import useAllDeliveryMan from "../../hooks/useAllDeliveryMan";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageButtonModal = ({ bookingId,refetch }) => {
  const [open, setOpen] = React.useState(false);
  const [deliveryMan] = useAllDeliveryMan();
  const axiosSecure = useAxiosSecure();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const deliveryManId = form.select.value;
    const approximateDeliveryDate = form.date.value;
    const dataInfo = {
      status: "On The Way",
      deliveryManId: deliveryManId,
      approximateDeliveryDate: approximateDeliveryDate,
    };

    console.log(deliveryManId, approximateDeliveryDate);
    axiosSecure.put(`/parcels/${bookingId}`, dataInfo).then((res) => {
      console.log(res.data)
      refetch()
      if (res.data.modifiedCount > 0) {
        toast.success("A delivery man has been appointed for the parcel ");
      }
    });
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        <FaEdit className="text-xl" />
      </Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        ,
        <form onSubmit={handleForm}>
          <DialogBody>
            <Typography
              className="mb-10 font-bold text-center -mt-7 "
              color="black"
              variant="lead"
            >
              Manage Booked Parcel
            </Typography>
            <div className="grid gap-6">
              <select
                name="select"
                required
                className=" w-full mt-1 p-2 outline-none rounded-md bg-white border border-gray-400 "
              >
                <option disabled selected>
                  Select Your Role
                </option>
                {deliveryMan.map(({ name, _id }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
              </select>
              <Input
                type="date"
                name="date"
                label="Approximate delivery date"
                required
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              cancel
            </Button>
            <Button
              variant="gradient"
              type="submit"
              color="gray"
              onClick={handleOpen}
            >
              Assign
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default ManageButtonModal;