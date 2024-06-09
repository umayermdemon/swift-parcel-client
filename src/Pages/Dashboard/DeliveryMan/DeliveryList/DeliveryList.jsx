import { Card, Typography } from "@material-tailwind/react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useDeliveryList from "../../../../hooks/useDeliveryList";
import DeliveryListCard from "./DeliveryListCard";
// import useDuplicateParcels from "../../../../hooks/useDuplicateParcels";
const TABLE_HEAD = [
  "Booked User’s Name",
  "Receivers Name",
  "Booked User’s Phone",
  "Requested Delivery Date",
  "Approximate Delivery Date",
  "Receivers phone number",
  "Receivers Address",
  "View Location",
  "Cancel",
  "Deliver",
];

const DeliveryList = () => {
  const [deliveryList] = useDeliveryList();
  console.log(deliveryList);
  return (
    <div>
      <SectionTitle heading={" My Delivery List"} />
      <div className="max-w-6xl md:mx-2   lg:mx-auto">
        <div className="bg-[#0E3557] max-w-6xl h-12 rounded-tl-xl rounded-tr-xl">
          <h2 className="text-white font-semibold ml-4 pt-2">Total Parcels:</h2>
        </div>
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
              {deliveryList.map((item, idx) => {
                const isLast = idx === deliveryList.length - 1;
                return <DeliveryListCard key={idx} isLast={isLast} item={item}/>;
              })}
            </tbody>
          </table>
        </Card>
      </div>
      {/* <Pagination/> */}
    </div>
  );
};

export default DeliveryList;
