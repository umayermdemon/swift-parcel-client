import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Card, Typography } from "@material-tailwind/react";
import useAllParcels from "../../../../hooks/useAllParcels";
// import { FaEdit } from "react-icons/fa";
import ManageButtonModal from "../../../../Components/ManageButtonModal/ManageButtonModal";
import { useState } from "react";

const TABLE_HEAD = [
  "User’s Name",
  "User’s Phone",
  "Booking Date",
  "Requested Delivery Date",
  "Cost",
  "Status",
  "Manage",
];

const AllParcels = () => {
  const [parcels, refetch] = useAllParcels();
  const [bookingId, setBookingId] = useState(null);
  const handleManage = (id) => {
    setBookingId(id);
  };

  return (
    <div>
      <SectionTitle heading="ALL Parcels" />
      <div className="max-w-6xl mx-2 lg:mx-auto">
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Parcels:{parcels.length}
          </h2>
        </div>
        {parcels.length > 0 && (
          <Card className="h-full w-full overflow-scroll lg:overflow-hidden">
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
                {parcels.map(
                  (
                    {
                      name,
                      phoneNumber,
                      bookingDate,
                      requestedDeliveryDate,
                      price,
                      status,
                      _id,
                    },
                    index
                  ) => {
                    const isLast = index === parcels.length - 1;
                    const classes = isLast
                      ? "p-4 text-center"
                      : "p-4 text-center border-b  border-blue-gray-50";
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
                        <td className={classes}>
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
                        <td className={classes}>
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
                        <td className={classes}>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className={
                              status === "Pending"
                                ? "bg-orange-300 p-1 rounded-md"
                                : "bg-green-300 p-1 rounded-md text-white"
                            }
                          >
                            {status}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium text-center"
                          >
                            <button onClick={() => handleManage(_id)}>
                              <ManageButtonModal bookingId={bookingId} refetch={refetch}/>
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
