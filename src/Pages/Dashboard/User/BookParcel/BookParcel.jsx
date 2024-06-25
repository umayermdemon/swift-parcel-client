import { Button, Input } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useState } from "react";
import { toast } from "react-toastify";

const BookParcel = () => {
  const { user } = useAuth();
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear();
  const bookedDate = `${year}-${month}-${date}`;
  const axiosPublic = useAxiosPublic();
  const [parcelWeight, setParcelWeight] = useState("");
  const [price, setPrice] = useState(null);

  const calculatePrice = (parcelWeight) => {
    let price = 0;
    if (parcelWeight === 1) {
      price = 50;
    } else if (parcelWeight === 2) {
      price = 100;
    } else if (parcelWeight > 2) {
      price = 150;
    }
    setPrice(price);
  };

  const handleParcelWeightChange = (e) => {
    const newWeight = parseFloat(e.target.value);
    setParcelWeight(newWeight);
    calculatePrice(newWeight);
  };

  const handleBookedForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const parcelDeliveryAddress = form.parcelDeliveryAddress.value;
    const parcelType = form.parcelType.value;
    const parcelWeight = form.parcelWeight.value;
    const receiversName = form.receiversName.value;
    const receiversPhoneNumber = form.receiversPhoneNumber.value;
    const deliveryAddressLatitude = parseFloat(
      form.deliveryAddressLatitude.value
    );
    const deliveryAddressLongitude = parseFloat(
      form.deliveryAddressLongitude.value
    );
    const requestedDeliveryDate = form.requestedDeliveryDate.value;
    const price = parseInt(form.price.value);
    const bookingDate = bookedDate;
    const status = "Pending";
    const parcelInfo = {
      name,
      email,
      phoneNumber,
      parcelDeliveryAddress,
      parcelType,
      parcelWeight,
      receiversName,
      receiversPhoneNumber,
      deliveryAddressLatitude,
      deliveryAddressLongitude,
      requestedDeliveryDate,
      price,
      status,
      bookingDate,
    };
    if (phoneNumber.length < 11 || phoneNumber.length > 11) {
      return toast.warn("Please provide valid Phone Number");
    }
    if (receiversPhoneNumber.length < 11 || receiversPhoneNumber.length > 11) {
      return toast.warn("Please provide valid Phone Number");
    }
    axiosPublic.post("/parcels", parcelInfo).then((res) => {
      if (res.data.insertedId) {
        const userPhone = {
          phoneNumber: phoneNumber,
        };
        axiosPublic.put(`/users/${user?.email}`, userPhone).then((res) => {
          if (res.data.modifiedCount > 0) {
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
          }
        });
      }
      form.reset();
    });
  };
  return (
    <div>
      <SectionTitle heading={"Book Your Parcel Now"} />
      <form
        onSubmit={handleBookedForm}
        className="lg:max-w-4xl mx-4 mb-8 md:mb-0  lg:mx-auto space-y-4 md:space-y-6 lg:space-y-8 bg-white p-4 md:p-6 lg:p-8 rounded-md"
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
            name="name"
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Email"
            placeholder="Type Here"
            defaultValue={user.email}
            readOnly
            name="email"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="number"
            variant="standard"
            size="lg"
            label="Phone"
            placeholder="Type Here"
            name="phoneNumber"
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Parcel Type"
            placeholder="Type Here"
            name="parcelType"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <Input
            type="number"
            id="weight"
            name="parcelWeight"
            min="1"
            label="Parcel Weight (kg)"
            value={parcelWeight}
            onChange={handleParcelWeightChange}
            size="lg"
            variant="standard"
            placeholder="Type Here"
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Receiver’s Name"
            placeholder="Type Here"
            name="receiversName"
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
            name="receiversPhoneNumber"
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Parcel Delivery Address"
            placeholder="Type Here"
            name="parcelDeliveryAddress"
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
            name="deliveryAddressLatitude"
            required
          />
          <Input
            type="text"
            variant="standard"
            size="lg"
            label="Delivery Address longitude"
            placeholder="Type Here"
            name="deliveryAddressLongitude"
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
            name="requestedDeliveryDate"
            required
          />
          <Input
            type="number"
            id="price"
            name="price"
            label="Price (Tk)"
            value={price}
            readOnly
            size="lg"
            variant="standard"
            placeholder="Type Here"
            required
          />
        </div>
        <div className="flex  justify-center">
          <Button type="submit" className="bg-[#F5AB35] text-sm">
            Book Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookParcel;
