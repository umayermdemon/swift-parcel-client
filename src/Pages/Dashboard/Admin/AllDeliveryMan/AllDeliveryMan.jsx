import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import AllDeliveryManCard from "./AllDeliveryManCard";
import useAllDeliveryMan from "../../../../hooks/useAllDeliveryMan";
import { Triangle } from "react-loader-spinner";

const TABLE_HEAD = [
  "Name",
  "Phone Number",
  "Number of parcel delivered",
  "Average review"
];

const AllDeliveryMan = () => {
  const [deliveryMan, refetch,isLoading] = useAllDeliveryMan();
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
      <SectionTitle heading={"All Delivery Man"} />
      <div className={
          deliveryMan.length > 6
            ? "max-w-6xl md:mx-2 md:h-full lg:h-[550px] lg:mx-auto"
            : "max-w-6xl md:mx-2  lg:mx-auto"
        }>
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Deliveryman: {deliveryMan.length}
          </h2>
        </div>
        {deliveryMan.length > 0 && (
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
                {deliveryMan.map((user, idx) => {
                  const isLast = idx === deliveryMan.length - 1;
                  return (
                    <AllDeliveryManCard
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

export default AllDeliveryMan;
