import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import { Link, Outlet } from "react-router-dom";
import { FaHome} from "react-icons/fa";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import SidePanelLarge from "../../../Components/SidePanelLarge/SidePanelLarge";
import SidePanelSmall from "../../../Components/SidePanelSmall/SidePanelSmall";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();

  return (
    <div className="bg-[#AFB9C5] w-full pt-4 md:pt-12 lg:pt-5 min-h-screen">
      <div className="mx-2 md:mx-4 lg:mx-48 h-12  flex items-center justify-between  rounded-tl-2xl bg-[#0E3557] rounded-tr-2xl">
        <Link to="/">
          <Typography className=" my-2 px-1 ml-4 lg:ml-28 text-xl md:text-3xl bg-[#AFB9C5] rounded-sm cursor-pointer text-[#0B2D42]">
            <FaHome />
          </Typography>
        </Link>

        <div className="block lg:hidden">
          <SidePanelSmall/>

        </div>

        <div className="block lg:hidden">
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            placement="bottom-end"
          >
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-gray-900 p-0.5"
                  src={user?.photoURL}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="px-4 py-2">
              <Typography variant="h6" color="black">
                {user?.displayName}
              </Typography>
              <Typography color="black" className="text-xs">
                {user?.email}
              </Typography>
            </MenuList>
          </Menu>
        </div>
        {/* small device dashboard extra design end  */}
      </div>
      <div className="mx-2 md:mx-4 lg:mx-48  text-xl font-bold pl-36 md:pl-80 lg:pl-20 py-2 text-[#0E3557] bg-[#D7DBE4]">
        <h2>Dashboard</h2>
      </div>
      <div className="flex flex-row lg:pb-12 px-2 md:px-4 lg:px-48">
        <div className="h-[630px] lg:h-[750px] bg-[#0E3557] w-72 lg:w-80 hidden lg:block  rounded-bl-2xl">
          <div className="my-4 flex flex-col items-center justify-center">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="rounded-full w-24"
            />
            <Typography variant="h5" color="white" className="my-2">
              {user?.displayName}
            </Typography>
            <Typography color="white" className="text-xs">
              {user?.email}
            </Typography>
          </div>

          <SidePanelLarge />
        </div>
        <div className="bg-[#D7DBE4] md:h-[630px] lg:h-[750px] w-full  rounded-br-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
