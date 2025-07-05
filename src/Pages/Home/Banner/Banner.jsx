import { Button, Input } from "@material-tailwind/react";
import bgImg from "../../../assets/Images/Banner/banner2.jpg";
import "animate.css";
import { FaCarSide } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative mb-24 md:mb-16 lg:mb-28">
      <img
        src={bgImg}
        alt=""
        className="w-full border-b-4 md:border-b-8 border-[#F5AB35] h-[300px] lg:h-[600px] object-cover"
      />
      <div className="bg-black bg-opacity-60 w-full border-b-4 md:border-b-8 border-[#F5AB35] absolute top-0 h-[300px] lg:h-[600px]">
        <div className="h-[300px] lg:h-[600px] flex flex-col gap-4 items-center justify-center">
          <FaCarSide
            data-aos="fade-right"
            data-aos-duration="3000"
            className="text-white  text-6xl w-36"
          />
          <div className="text-white flex flex-row gap-3 uppercase font-semibold">
            <h3 className="hover:text-[#F5AB35] hover:delay-150 cursor-pointer">
              Fast
            </h3>
            <span>•</span>
            <h3 className="hover:text-[#F5AB35] hover:delay-150 cursor-pointer">
              Secured
            </h3>
            <span>•</span>
            <h3 className="hover:text-[#F5AB35] hover:delay-150 cursor-pointer">
              Worldwide
            </h3>
          </div>
          <div className="mb-8">
            <h1 className="text-white text-2xl md:text-3xl lg:text-6xl mb-2 font-bold  text-center">
              Experience Swift and Seamless
            </h1>
            <h1 className="text-white text-2xl md:text-3xl lg:text-6xl font-bold  text-center">
              <span className="text-[#F5AB35]">Parcel Delivery</span> Services
            </h1>
          </div>

        {/* search field */}
        
          <div className="bg-white rounded-md absolute -bottom-20 md:-bottom-14 lg:-bottom-20 shadow-xl w-[320px] md:w-[550px] lg:w-[800px] md:h-[120px] lg:h-[150px]">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 md:mt-4 lg:mt-8">
              <h1 className="border-2 border-[#F5AB35] w-6"></h1>
              <h1 className="font-bold md:text-lg">TRACK YOUR PRODUCT</h1>
              <h3 className=" hidden md:block text-sm text-gray-500">
                Now you can track your product easily
              </h3>
            </div>
            <form className=" flex flex-col md:flex-row items-center gap-2 md:gap-4 mr-4 lg:mr-16 ml-4 lg:ml-12 my-2 lg:my-4">
              <Input label="Enter Your Product Id" required/>
              <Button type="submit"  variant="outlined" className="text-white w-40 md:w-72 lg:w-96 border-none hover:bg-black bg-[#F5AB35]">Track</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
