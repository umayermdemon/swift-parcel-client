import { Card, CardHeader, Typography } from "@material-tailwind/react";
import CountUp from "react-countup";
import useRegisteredUser from "../../../hooks/useRegisteredUser";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Statistics = () => {
  const axiosPublic = useAxiosPublic();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosPublic.get("/parcels/bookedParcel");
      return res.data;
    },
  });

  const deliveredInfo = {
    status: "Delivered",
  };
  const { data: deliveredParcels = [] } = useQuery({
    queryKey: ["deliveredParcels"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/parcels/totalDelivered/${deliveredInfo.status}`
      );
      return res.data;
    },
  });
  const [users] = useRegisteredUser();
  console.log(users, deliveredParcels, parcels);
  return (
    <div className="bg-orange-50 py-2 md:py-4 max-w-screen-2xl rounded-md mx-auto my-4 md:my-8 lg:my-12">
      <div className="flex flex-row gap-2 max-w-7xl md:mx-auto  mx-1">
        <Card
          shadow={false}
          className="relative grid h-[8rem] md:h-[12rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/VT52Rw6/cart.jpg')] bg-cover  bg-center"
          >
            <div className="to-bg-black-10 flex flex-col justify-center items-center absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50">
              <Typography
                color="white"
                className="text-base md:text-3xl lg:text-4xl font-bold"
              >
                Parcel Booked
              </Typography>
              <CountUp
                duration={4}
                end={parcels.length}
                className="text-white text-xl md:text-3xl lg:text-5xl font-bold"
              />
            </div>
          </CardHeader>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[8rem] md:h-[12rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/DbwNGkT/parcel-delivered.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 flex flex-col justify-center items-center absolute inset-0 h-full w-full bg-gradient-to-r from-black/60 via-black/50">
              <Typography
                color="white"
                className="text-base md:text-3xl lg:text-4xl font-bold"
              >
                Parcel Delivered
              </Typography>
              <CountUp
                duration={4}
                end={deliveredParcels.length}
                className="text-white text-xl md:text-3xl lg:text-5xl font-bold"
              />
            </div>
          </CardHeader>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[8rem] md:h-[12rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/529JnDj/registered-users.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 flex flex-col justify-center items-center absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50">
              <Typography
                color="white"
                className="text-base md:text-3xl lg:text-4xl font-bold"
              >
                Happy Users
              </Typography>
              <CountUp
                duration={4}
                end={users.length}
                className="text-white text-xl md:text-3xl lg:text-5xl font-bold"
              />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
