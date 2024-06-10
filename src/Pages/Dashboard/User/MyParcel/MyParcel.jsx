import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useBookedParcel from "../../../../hooks/useBookedParcel";
import MyParcelCard from "./MyParcelCard";
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
  const [bookedParcel, refetch] = useBookedParcel();
  return (
    <div>
      <SectionTitle heading={"My Parcels"} />
      <div
        className={
          bookedParcel.length > 6
            ? "max-w-6xl md:mx-2 md:h-[500px] lg:h-[550px] lg:mx-auto"
            : "max-w-6xl md:mx-2  lg:mx-auto"
        }
      >
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Parcels: {bookedParcel.length}
          </h2>
        </div>
        {bookedParcel.length > 0 && (
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
                        variant="md"
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
                {bookedParcel.map((user, idx) => {
                  const isLast = idx === bookedParcel.length - 1;
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
