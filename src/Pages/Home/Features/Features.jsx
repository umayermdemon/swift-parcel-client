import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Features = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div className="max-w-7xl my-12 mx-auto">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-[#0B2D42]">Our Features</h1>
          <p className="w-[400px] md:w-[600px] lg:w-[800px] mx-auto text-xs md:text-base text-gray-500">
            Welcome to Swift, your trusted partner in parcel management
            solutions. At Swift, we understand the importance of efficient,
            reliable, and secure parcel delivery. 
          </p>
        </div>

        {/* swiper start */}
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {feature.map(({title,description,icon,bgColor}, idx) => (
              <SwiperSlide key={idx}>
                  <Card style={{backgroundColor: bgColor}} className=" w-36 md:w-full h-64 lg:h-52  text-center mx-2">
                    <CardBody>
                      <h3 className="mb-3 text-5xl">{icon}</h3>
                      <Typography
                        color="blue-gray"
                        className="mb-1 text-sm md:text-xl font-bold"
                      >
                        {title}
                      </Typography>
                      <Typography className="text-xs md:text-base">{description}</Typography>
                    </CardBody>
                  </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* swiper end */}
      </div>
    </div>
  );
};

export default Features;
