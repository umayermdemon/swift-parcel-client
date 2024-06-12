import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useBookedParcel from "../../../../hooks/useBookedParcel";
import MyParcelCard from "./MyParcelCard";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";
const TABLE_HEAD = [
  "Parcel Type",
  "Requested Delivery Date",
  "Approximate Delivery Date",
  "Booking Date",
  "Delivery Men ID",
  "Booking Status",
  "Update",
  "Cancel",
  "Review",
  "Pay",
];
const MyParcel = () => {
  const [bookedParcel, refetch, isLoading] = useBookedParcel();
  const [filter, setFilter] = useState("All");
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
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredParcels = bookedParcel.filter((parcel) => {
    if (filter === "All") return true;
    return parcel.status === filter;
  });
  return (
    <div>
      <SectionTitle heading={"My Parcels"} />
      <div
        className={
          bookedParcel.length > 6
            ? "max-w-6xl md:mx-2 md:h-full lg:h-full lg:mx-auto"
            : "max-w-6xl md:mx-2  lg:mx-auto"
        }
      >
        <div className="bg-[#0E3557] max-w-6xl flex justify-between  p-2 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Parcels: {filteredParcels.length}
          </h2>
          <div className="bg-white rounded-md">
            <select
              label="Filter"
              size="sm"
              value={filter}
              onChange={handleFilterChange}
              className=" w-full mt-1 p-2 outline-none border-none rounded-md  "
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="On The Way">On The Way</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
        </div>
        {filteredParcels.length > 0 && (
          <Card className="h-full  w-full overflow-scroll ">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b text-center border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        color="gray"
                        className="font-semibold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredParcels.map((user, idx) => {
                  const isLast = idx === filteredParcels.length - 1;
                  return (
                    <MyParcelCard
                      key={idx}
                      user={user}
                      isLast={isLast}
                      refetch={refetch}
                    />
                  );
                })}
              </tbody>
            </table>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyParcel;
