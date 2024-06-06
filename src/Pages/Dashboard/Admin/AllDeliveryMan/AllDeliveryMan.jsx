import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import AllDeliveryManCard from "./AllDeliveryManCard";
import useAllDeliveryMan from "../../../../hooks/useAllDeliveryMan";



const TABLE_HEAD = [
  "Name",
  "Phone Number",
  "Number of parcel delivered",
  "Average review",
  "Delete"
];

const AllDeliveryMan = () => {
  const [deliveryMan,refetch]=useAllDeliveryMan()
  return (
    <div>
      <SectionTitle heading={"All Delivery Man"} />
      <div className="max-w-6xl mx-2 lg:mx-auto">
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">
            Total Users: {deliveryMan.length}
          </h2>
        </div>
        {deliveryMan.length > 0 && (
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
                {deliveryMan.map((user,idx)=>{
                  const isLast = idx === deliveryMan.length - 1;
                  return <AllDeliveryManCard key={idx} user={user} isLast={isLast} refetch={refetch}/>
                })
                }
              </tbody>
            </table>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AllDeliveryMan;