import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const TopDeliveryManCard = ({ item }) => {
  const {
    averageRating,
    deliveredParcels,
    name,
    image,
  } = item;

  return (
    <div>
     <Card className="lg:w-96 bg-blue-50">
      <CardHeader floated={false}  className="h-52 w-52 mx-auto bg-orange-200 rounded-full">
        <img src={image} alt="profile-picture" className="h-full w-full rounded-full"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" >
          Delivered Parcel: <span className="text-green-500">{deliveredParcels}</span>
        </Typography>
        <Typography color="blue-gray" className="font-medium" >
         Average Ratings: <span className="text-blue-800">{averageRating}</span>
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
  );
};

export default TopDeliveryManCard;
