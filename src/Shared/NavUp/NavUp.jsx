import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineMail, MdOutlineWatchLater } from "react-icons/md";

const NavUp = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#08273E] w-full py-2 lg:py-0  lg:h-12 flex flex-col lg:flex-row items-center justify-between px-4 font-sans ">
        <div className="text-white flex flex-row gap-4 mb-4 lg:mb-0 text-sm">
          <address className="flex items-center gap-0.5">
            {" "}
            <CiLocationOn className="text-lg text-light-blue-500" /> 123,
            Broklyn Street, New York
          </address>
          <h3 className="flex items-center gap-1">
            <MdOutlineMail className="text-lg text-light-blue-500" />{" "}
            info@experia.com
          </h3>
          <h4 className="flex items-center gap-1">
            <MdOutlineWatchLater className="text-lg text-light-blue-500" />{" "}
            08.00 AM-09.00 PM
          </h4>
        </div>
        <div className="flex gap-6 lg:mr-12">
          <div className="flex items-center gap-4 text-white">
            <a href="https://www.facebook.com" target="_blank" className="bg-light-blue-700 p-1 rounded-full"><FaFacebook /></a>
            <a href="https://www.youtube.com" target="_blank" className="bg-light-blue-700 p-1 rounded-full"><FaYoutube /></a>
            <a href="https://x.com" target="_blank" className="bg-light-blue-700 p-1 rounded-full"><FaTwitter /></a>
          </div>
          <div className="flex items-center gap-4  text-white">
            <h1>News & Media</h1>
            <h1>FAQs</h1>
            <h1>Get Quote</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUp;
