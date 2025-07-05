import { Triangle } from "react-loader-spinner";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useGetReviews from "../../../../hooks/useGetReviews";
import ReviewsCard from "./ReviewsCard";



const Reviews = () => {
  const [reviews,isLoading]=useGetReviews()
  if(isLoading){
    return  <div className="flex justify-center items-center min-h-96">
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
  }
  return (
    <div>
      <SectionTitle heading={"My Reviews"}/>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center justify-center">
        {
          reviews.map((review,idx)=><ReviewsCard key={idx} review={review}/>)
        }
      </div>
    </div>
  );
};

export default Reviews;