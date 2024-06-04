import { Button, Input } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const BookParcel = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const parcelInfo = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      parcelDeliveryAddress: data.parcelDeliveryAddress,
      parcelType: data.parcelType,
      parcelWeight: data.parcelWeight,
      receiversName: data.receiversName,
      receiversPhoneNumber: data.receiversPhoneNumber,
      deliveryAddressLatitude: parseFloat(data.deliveryAddressLatitude),
      deliveryAddressLongitude: parseFloat(data.deliveryAddressLongitude),
      requestedDeliveryDate: data.requestedDeliveryDate,
      price: parseInt(data.price),
      status: "Pending",
    };
    axiosPublic.post("/parcels", parcelInfo).then((res) => {
      if (res.data.insertedId) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Parcel Booked successfully",
        });
        reset();
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"Book Your Parcel Now"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-4xl mx-4 mb-8 md:mb-0 lg:mx-auto space-y-4 md:space-y-6 lg:space-y-8 bg-white p-4 md:p-6 lg:p-8 rounded-md"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Name"
            placeholder="Type Here"
            defaultValue={user.displayName}
            readOnly
            {...register("name")}
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Email"
            placeholder="Type Here"
            defaultValue={user.email}
            readOnly
            {...register("email")}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="number"
            variant="standard"
            size="lg"
            label="Phone"
            placeholder="Type Here"
            {...register("phoneNumber")}
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Parcel Type"
            placeholder="Type Here"
            {...register("parcelType")}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="number"
            variant="standard"
            size="lg"
            label="Parcel Weight"
            placeholder="Type Here"
            {...register("parcelWeight")}
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Receiver’s Name"
            placeholder="Type Here"
            {...register("receiversName")}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="number"
            variant="standard"
            size="lg"
            label="Receiver's Phone Number"
            placeholder="Type Here"
            {...register("receiversPhoneNumber")}
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Parcel Delivery Address"
            placeholder="Type Here"
            {...register("parcelDeliveryAddress")}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Delivery Address Latitude"
            placeholder="Type Here"
            {...register("deliveryAddressLatitude")}
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Delivery Address longitude"
            placeholder="Type Here"
            {...register("deliveryAddressLongitude")}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="date"
            variant="standard"
            size="lg"
            label="Requested Delivery Date"
            placeholder="Type Here"
            {...register("requestedDeliveryDate")}
            required
          />
          <Input
            type="number"
            variant="standard"
            size="lg"
            label="Price"
            placeholder="Type Here"
            {...register("price")}
            required
          />
        </div>
        <div className="flex  justify-center">
          <Button type="submit" className="bg-[#F5AB35] text-sm">
            Book Now{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookParcel;
