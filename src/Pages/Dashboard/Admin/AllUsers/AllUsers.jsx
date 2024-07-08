import { Button, Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import AllUsersCard from "./AllUsersCard";
import { Triangle } from "react-loader-spinner";
import { useLoaderData } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
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
  const [currentPage, setCurrentPage] = useState(0);
  const { totalUsers } = useLoaderData();
  const userPerPage = 5;
  const numberOfPages = Math.ceil(totalUsers / userPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [currentPage, userPerPage, "users"],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/User?page=${currentPage}&size=${userPerPage}`
      );
      return res.data;
    },
  });

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

  return (
    <div>
      <SectionTitle heading={"All Users"} />
      <div
        className={
          users.length > 5
            ? "max-w-6xl md:mx-2 h-[360px] lg:h-[380px] lg:mx-auto"
            : "max-w-6xl md:mx-2 pb-12 lg:mx-auto"
        }
      >
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Users:
            <span className="text-xl font-cinzel text-[#F5AB35]">
              {users.length}
            </span>
            of <span className="font-cinzel text-xl">{totalUsers}</span>
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
      <div className="mt-16 flex justify-center">
        <Button variant="text" size="sm" className="mr-1" onClick={handlePrev}>
          <ArrowLeftIcon className="text-black w-5" />
        </Button>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page ? "mr-2 bg-[#0E3557] text-white" : "mr-2"
            }
            variant="outlined"
          >
            {page + 1}
          </Button>
        ))}
        <Button variant="text" size="sm" className="mr-1" onClick={handleNext}>
          <ArrowRightIcon className="text-black w-5" />
        </Button>
      </div>
    </div>
  );
};

export default AllUsers;
