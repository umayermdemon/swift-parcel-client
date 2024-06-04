import {  Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
const TABLE_HEAD = [
  "Name",
  "Phone Number",
  "Booked Parcel",
  "Total Spent",
  "User Role",
  "Admin",
  "Delivery Men"
];

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  return (
    <div>
      <SectionTitle heading={"All Users"} />
      <div className="max-w-6xl mx-2 lg:mx-auto">
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Users: {users.length}
          </h2>
        </div>
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
              {users.map(({ name, role, date }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast
                  ? "p-4 text-center"
                  : "p-4 border-b text-center border-blue-gray-50";

                return (
                  <tr key={name}>
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
                      ></Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
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
                        Edit
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {role}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        color="blue-gray"
                        
                        className="font-medium border-2 border-[#0E3557] cursor-pointer w-10 rounded-md ml-6 p-1"
                      >
                        <RiAdminFill className="text-xl pl-1"/>
                      </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        color="blue-gray"
                        
                        className="font-medium border-2 border-[#0E3557] cursor-pointer w-10 rounded-md ml-6 p-1"
                      >
                        <TbTruckDelivery className="text-2xl text-center  pl-1"/>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AllUsers;