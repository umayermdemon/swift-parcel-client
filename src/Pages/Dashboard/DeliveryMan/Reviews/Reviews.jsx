import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useGetReviews from "../../../../hooks/useGetReviews";
import ReviewsCard from "./ReviewsCard";



const Reviews = () => {
  const [reviews,isLoading]=useGetReviews()
  if(isLoading){
    return <div>Loading.......</div>
  }
  console.log(reviews)
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