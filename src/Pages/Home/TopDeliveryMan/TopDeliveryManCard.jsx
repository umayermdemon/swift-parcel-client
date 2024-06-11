import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TopDeliveryManCard = ({ item }) => {
  const { _id } = item;
  const axiosPublic = useAxiosPublic();


  const { data: deliveredParcels = [] } = useQuery({
    queryKey: [_id, "deliveredParcels"],
    enabled: !!_id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/parcels/parcelDelivered/${_id}`);
      return res.data;
    },
  });


  const { data: reviews, isLoading } = useQuery({
    queryKey: [_id, "reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${_id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <div>......</div>;
  }
  const totalRating = reviews.reduce(
    (total, review) => total + review.rating,
    0
  );
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
  console.log('t',averageRating.toFixed(2),deliveredParcels);
  return (
    <div>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            How we design and code open-source projects?
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            Tania Andrew
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default TopDeliveryManCard;
