import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import ReviewsCard from "./ReviewsCard";



const Reviews = () => {
 
  return (
    <div>
      <SectionTitle heading={"My Reviews"}/>
      <div>
        <ReviewsCard/>
      </div>
    </div>
  );
};

export default Reviews;