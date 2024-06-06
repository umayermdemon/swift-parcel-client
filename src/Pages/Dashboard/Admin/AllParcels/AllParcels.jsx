import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import {
  ButtonGroup,
  Card,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import useAllPArcels from "../../../../hooks/useAllPArcels";
import { FaEdit } from "react-icons/fa";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useLoaderData } from "react-router-dom";

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
  const [parcels] = useAllPArcels();
  const [active, setActive] = React.useState(1);
  const {count}=useLoaderData()

  const getItemProps = (index) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div>
      <SectionTitle heading="ALL Parcels" />
      <div className="max-w-6xl mx-2 lg:mx-auto">
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Parcels: {parcels.length}
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
                    },
                    index
                  ) => {
                    const isLast = index === parcels.length - 1;
                    const classes = isLast
                      ? "p-4 text-center"
                      : "p-4 text-center border-b  border-blue-gray-50";

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
                            className="font-medium"
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
                            <button>
                              <FaEdit className="text-xl" />
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
        <div className="mt-4 flex   justify-center">
          <ButtonGroup variant="outlined">
            <IconButton onClick={prev}>
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton {...getItemProps(4)}>4</IconButton>
            <IconButton {...getItemProps(5)}>5</IconButton>
            <IconButton onClick={next}>
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default AllParcels;
