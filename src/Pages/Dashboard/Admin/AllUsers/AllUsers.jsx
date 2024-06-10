import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAllUsers from "../../../../hooks/useAllUsers";
import AllUsersCard from "./AllUsersCard";
const TABLE_HEAD = [
  "Name",
  "Phone Number",
  "Booked Parcel",
  "Total Spent",
  "User Role",
  "Admin",
  "Delivery Men",
];

const AllUsers = () => {
  const [users, refetch] = useAllUsers();
  return (
    <div>
      <SectionTitle heading={"All Users"} />
      <div
        className={
          users.length > 6
            ? "max-w-6xl md:mx-2 md:h-[500px] lg:h-[550px] lg:mx-auto"
            : "max-w-6xl md:mx-2  lg:mx-auto"
        }
      >
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Users: {users.length}
          </h2>
        </div>
        {users.length > 0 && (
          <Card className="h-full w-full overflow-scroll ">
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
                {users.map((user, idx) => {
                  const isLast = idx === users.length - 1;
                  return (
                    <AllUsersCard
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
      {/* <Pagination/> */}
    </div>
  );
};

export default AllUsers;
