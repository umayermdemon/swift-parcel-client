import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { MdReviews } from "react-icons/md";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ReviewsModal = ({ status, deliveryManId }) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear();
  const reviewedDate = `${year}-${month}-${date}`;
  const handleOpen = () => setOpen(!open);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const userName = data?.userName;
    const userImage = data?.userImage;
    const rating = data?.rating;
    const feedback = data?.feedback;
    const deliveryManId = data?.deliveryManId;

    const reviewInfo = {
      userName,
      userImage,
      rating,
      feedback,
      deliveryManId,
      reviewedDate,
    };
    if (rating > 5) {
      return toast.error("Please Rating out of 5");
    }
    if (feedback.length > 120) {
      return toast.error("Feedback should be given in 120 words");
    }
    axiosSecure.post("/reviews", reviewInfo).then((res) => {
      if (res.data.insertedId) {
        handleOpen();
        toast.success("Reviewed successfully");
      }
    });
  };
  return (
    <div>
      <button onClick={handleOpen} disabled={status != "Delivered"}>
        <MdReviews
          className={
            status != "Delivered"
              ? "text-xl text-green-200 mx-auto"
              : "text-xl text-green-700 mx-auto"
          }
        />
      </button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-end justify-end py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody>
            <Typography
              variant="h4"
              className="mb-10 -mt-7 text-center"
              color="black"
            >
              Give Review
            </Typography>
            <div className="grid gap-6">
              <Input
                label="User's Name"
                defaultValue={user?.displayName}
                {...register("userName")}
                readOnly
              />
              <Input
                label="User's Image"
                defaultValue={user?.photoURL}
                {...register("userImage")}
                readOnly
              />
              <Input
                type="number"
                label="Rating out of 5"
                {...register("rating")}
                required
              />
              <Textarea
                label="Feedback (within 120 word)"
                {...register("feedback")}
                required
              />
              <Input
                label="Delivery Men’s Id"
                defaultValue={deliveryManId}
                readOnly
                {...register("deliveryManId")}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              cancel
            </Button>
            <Button type="submit" className="bg-[#0B2D42]" color="gray">
              Send Feedback
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default ReviewsModal;
