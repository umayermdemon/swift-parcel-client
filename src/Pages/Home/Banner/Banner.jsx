import { Button, Input } from "@material-tailwind/react";
import bgImg from "../../../assets/Images/Banner/banner2.jpg";
import "animate.css";
import { FaCarSide } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative">
      <img
        src={bgImg}
        alt=""
        className="w-full border-b-8 border-[#F5AB35] h-[665px] object-cover"
      />
      <div className="bg-black bg-opacity-60 w-full border-b-8 border-[#F5AB35] absolute top-0 h-[665px]">
        <div className="h-[711px] flex flex-col gap-4 items-center justify-center">
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
          <div>
            <h1 className="text-white text-6xl mb-2 font-bold font-inter text-center">
              Experience Swift and Seamless
            </h1>
            <h1 className="text-white text-6xl font-bold font-inter text-center">
              <span className="text-[#F5AB35]">Parcel Delivery</span> Services
            </h1>
          </div>
          <div className="bg-white rounded-md absolute -bottom-20 shadow-xl w-[800px] h-[150px]">
            <div className="flex items-center gap-4 mt-8">
              <h1 className="border-2 border-[#F5AB35] w-6"></h1>
              <h1 className="font-bold text-lg">TRACK YOUR PRODUCT</h1>
              <h3 className="font-inter text-sm text-gray-500">
                Now you can track your product easily
              </h3>
            </div>
            <form className="font-inter flex gap-4 mr-16 ml-12 my-4">
              <Input label="Enter Your Product Id" required/>
              <Button type="submit"  variant="outlined" className="text-white w-96 border-none hover:bg-black bg-[#F5AB35]">Track Your Product</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
