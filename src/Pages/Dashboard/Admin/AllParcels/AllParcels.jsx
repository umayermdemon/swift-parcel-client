import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAllParcels from "../../../../hooks/useAllParcels";
import ManageButtonModal from "../../../../Components/ManageButtonModal/ManageButtonModal";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Triangle } from "react-loader-spinner";

const TABLE_HEAD = [
  "User’s Name",
  "User’s Phone",
  "Booking Date",
  "Requested Delivery Date",
  "Cost",
  "Status",
  "Manage",
  "DELETE",
];

const AllParcels = () => {
  const [parcels, refetch, isLoading] = useAllParcels();
  const [bookingId, setBookingId] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#0E3557"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  const handleManage = (id) => {
    setBookingId(id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const filteredParcels = parcels.filter((parcel) => {
    const parcelDate = new Date(parcel.requestedDeliveryDate);
    return (
      (!startDate || parcelDate >= startDate) &&
      (!endDate || parcelDate <= endDate)
    );
  });

  return (
    <div>
      <SectionTitle heading="ALL Parcels" />
      <div
        className={
          filteredParcels.length > 6
            ? "max-w-6xl md:mx-2 md:h-full lg:h-[550px] lg:mx-auto"
            : "max-w-6xl md:mx-2 lg:mx-auto"
        }
      >
        <div className="bg-[#0E3557] flex justify-between items-center max-w-6xl p-2 rounded-tl-xl rounded-tr-xl">
          <div>
            <h2 className="text-white text-sm md:text-lg font-semibold md:ml-4 pt-2">
              Total Parcels: {filteredParcels.length}
            </h2>
          </div>
          <div className="flex gap-1 md:gap-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select Start Date"
              className="bg-white rounded-md p-1 md:p-2 w-36 md:w-full"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select End Date"
              className="bg-white rounded-md p-1 md:p-2 w-36 md:w-full"
            />
          </div>
        </div>
        {filteredParcels.length > 0 && (
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b text-center border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredParcels.map(
                  (
                    {
                      name,
                      phoneNumber,
                      bookingDate,
                      requestedDeliveryDate,
                      price,
                      status,
                      _id,
                      payment_status,
                    },
                    index
                  ) => {
                    const isLast = index === filteredParcels.length - 1;
                    const classes = isLast
                      ? "p-4 text-center"
                      : "p-4 text-center border-b border-blue-gray-50";
                    return (
                      <tr key={_id}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {phoneNumber}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {bookingDate}
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
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            Tk.{price}
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
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-medium text-center"
                          >
                            <div onClick={() => handleManage(_id)}>
                              <ManageButtonModal
                                bookingId={bookingId}
                                refetch={refetch}
                                requestedDeliveryDate={requestedDeliveryDate}
                                status={status}
                                payment_status={payment_status}
                              />
                            </div>
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium text-center"
                          >
                            <button
                              disabled={status != "Cancel"}
                              onClick={() => handleDelete(_id)}
                            >
                              <MdDelete
                                className={
                                  status != "Cancel"
                                    ? "text-red-300 text-xl"
                                    : "text-red-600 text-xl cursor-pointer"
                                }
                              />
                            </button>
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AllParcels;
