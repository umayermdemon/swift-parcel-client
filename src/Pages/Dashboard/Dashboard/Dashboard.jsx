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
import { FaHome, FaUser } from "react-icons/fa";
import React from "react";
import SidePanelLarge from "../../../Components/SidePanelLarge/SidePanelLarge";
import SidePanelSmall from "../../../Components/SidePanelSmall/SidePanelSmall";
import { RiAdminFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import useSingleUser from "../../../hooks/useSingleUser";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();
  const [users] = useSingleUser();

  return (
    <div className="bg-[#AFB9C5] w-full pt-4 md:pt-12 lg:pt-5 min-h-screen">
      <div className="mx-2 md:mx-4 lg:mx-48 h-12 lg:pr-12 flex items-center justify-between  rounded-tl-2xl bg-[#0E3557] rounded-tr-2xl">
        <div>
          <Link to="/">
            <Typography className=" my-2 px-1 ml-4 lg:ml-28 text-xl md:text-3xl bg-[#AFB9C5] rounded-sm cursor-pointer text-[#0B2D42]">
              <FaHome />
            </Typography>
          </Link>
        </div>

        <div className="block lg:hidden">
          <SidePanelSmall />
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
                  alt=""
                  className="border border-gray-900 p-0.5"
                  src={user?.photoURL}
                />
              </Button>
            </MenuHandler>
            <MenuList className="px-4 py-2">
              <Typography variant="h6" color="black">
                {user?.displayName}
              </Typography>
              <Typography
                color="black"
                className="text-sm font-bold flex gap-1 items-center"
              >
                {users?.role === "Admin" && <RiAdminFill />}
                {users?.role === "User" && <FaUser />}
                {users?.role === "Delivery Man" && <TbTruckDelivery />}
                {users?.role}
              </Typography>
              <Typography color="black" className="text-xs">
                {user?.email}
              </Typography>
            </MenuList>
          </Menu>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <Avatar
              variant="circular"
              size="sm"
              alt=""
              className="border border-gray-900 p-0.5"
              src={user?.photoURL}
            />
            <Typography
              color="black"
              className="text-sm font-bold text-white flex gap-1 items-center"
            >
              {users?.role === "Admin" && <RiAdminFill />}
              {users?.role === "User" && <FaUser />}
              {users?.role === "Delivery Man" && <TbTruckDelivery />}
              {users?.role}
            </Typography>
          </div>
        </div>
        {/* small device dashboard extra design end  */}
      </div>
      <div className="mx-2 md:mx-4 lg:mx-48  text-xl font-bold pl-36 md:pl-80 lg:pl-20 py-2 text-[#0E3557] bg-[#D7DBE4]">
        <h2>Dashboard</h2>
      </div>
      <div className="flex flex-row lg:pb-12 px-2 md:px-4 lg:px-48">
        <div className=" bg-[#0E3557] w-72 lg:w-80 hidden lg:block  rounded-bl-2xl">
          <div className="my-4 flex flex-col items-center justify-center">
            <Avatar src={user?.photoURL} alt="avatar" size="xxl" />
            <Typography variant="h5" color="white" className="my-2">
              {user?.displayName}
            </Typography>
            <Typography color="white" className="text-xs">
              {user?.email}
            </Typography>
          </div>

          <SidePanelLarge />
        </div>
        <div className="bg-[#D7DBE4] h-full md:h-full lg:h-[750px] p-2 lg:p-8  w-full  rounded-b-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
