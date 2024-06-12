import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const ReviewsCard = ({ review }) => {
  const { feedback, rating, reviewedDate, userImage, userName } = review || {};
  return (
    <div>
      <Card
        color="transparent"
        shadow={true}
        className="w-96 md:w-[600px] lg:w-full p-4  bg-white "
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={userImage}
            alt=""
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography  color="blue-gray" className="text-lg md:text-2xl font-bold">
                {userName}
              </Typography>
              <div className=" flex items-center gap-0">
              <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
              </div>
            </div>
            <Typography color="blue-gray" className="text-sm"><span className="text-black font-bold ">Review Date:</span> {reviewedDate}</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 flex-grow">
          <Typography>{feedback}</Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ReviewsCard;
