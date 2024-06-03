import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaList, FaRegComment, FaRegListAlt, FaTruck, FaUser, FaUsersCog, } from "react-icons/fa";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();
  const isAdmin = true;
  const isUser = false;
  const isDeliveryMan = false;

  return (
    <div className="bg-[#AFB9C5] w-full pt-2 min-h-screen">
      <div className="mx-4 lg:mx-48 h-12 flex items-center justify-between  rounded-tl-2xl bg-[#0E3557] rounded-tr-2xl">
        <Link to="/">
          <Typography className=" my-2 px-1 ml-4 md:ml-20 lg:ml-28 text-xl md:text-3xl bg-[#AFB9C5] rounded-sm cursor-pointer text-[#0B2D42]">
            <FaHome />
          </Typography>
        </Link>
        {/* small device dashboard extra design start */}
        <div className="block md:hidden">
          <div className="flex flex-row gap-4 ml-4">
            <NavLink
              to="/dashboard/userProfile"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#F5AB35] flex-row gap-1  items-center text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <FaUser />
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/bookParcel"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-row gap-1  items-center text-[#F5AB35] text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <FaBook />
              Book
            </NavLink>
            <NavLink
              to="/dashboard/myParcel"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#F5AB35] flex-row gap-1  items-center text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <FaTruck />
              My Parcel
            </NavLink>
          </div>
        </div>
        <div className="block md:hidden">
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
      <div className="mx-4 lg:mx-48  text-xl font-bold pl-36 md:pl-12 lg:pl-20 py-2 text-[#0E3557] bg-[#D7DBE4]">
        <h2>Dashboard</h2>
      </div>
      <div className="flex flex-row lg:pb-12 px-4 lg:px-48">
        <div className="h-[630px] lg:h-[750px] bg-[#0E3557] w-72 lg:w-80 hidden md:block  rounded-bl-2xl">
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

          {/* admin section */}
          {isAdmin && (
            <div className="mx-4 lg:mx-8 mt-12 space-y-8">
              <NavLink
                to="/dashboard/allParcels"
                className={({ isActive }) =>
                  isActive
                    ? "flex text-[#F5AB35] flex-row gap-4 lg:gap-6 items-center text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaRegListAlt />
                All Parcels
              </NavLink>
              <NavLink
                to="/dashboard/allUsers"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-row gap-4 lg:gap-6 items-center text-[#F5AB35] text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaUsersViewfinder />
                All Users
              </NavLink>
              <NavLink
                to="/dashboard/allDeliveryMan"
                className={({ isActive }) =>
                  isActive
                    ? "flex text-[#F5AB35] flex-row gap-4 lg:gap-6 items-center text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaUsersCog />
                All Delivery Men
              </NavLink>
              <NavLink
                to="/dashboard/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "flex text-[#F5AB35] flex-row gap-4 lg:gap-6 items-center text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <MdOutlineAutoGraph />
                Statistics
              </NavLink>
            </div>
          )}
          {/* user section */}
          {isUser && (
            <div className="mx-4 lg:mx-12 mt-12 space-y-8">
              <NavLink
                to="/dashboard/userProfile"
                className={({ isActive }) =>
                  isActive
                    ? "flex text-[#F5AB35] flex-row gap-4 lg:gap-6 items-center text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaUser />
                My Profile
              </NavLink>
              <NavLink
                to="/dashboard/bookParcel"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-row gap-4 lg:gap-6 items-center text-[#F5AB35] text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaBook />
                Book A Parcel
              </NavLink>
              <NavLink
                to="/dashboard/myParcel"
                className={({ isActive }) =>
                  isActive
                    ? "flex text-[#F5AB35] flex-row gap-4 lg:gap-6 items-center text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaTruck />
                My Parcel
              </NavLink>
            </div>
          )}
          {/* delivery man section */}
          {isDeliveryMan && (
            <div className="mx-4 lg:mx-8 mt-12 space-y-8">
              <NavLink
                to="/dashboard/deliveryList"
                className={({ isActive }) =>
                  isActive
                    ? "flex text-[#F5AB35] flex-row gap-4 lg:gap-6 items-center text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaList />
                My Delivery List
              </NavLink>
              <NavLink
                to="/dashboard/reviews"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-row gap-4 lg:gap-6 items-center text-[#F5AB35] text-lg font-semibold"
                    : "flex flex-row gap-4 lg:gap-6 items-center text-lg font-semibold text-white"
                }
              >
                <FaRegComment />
                My Reviews
              </NavLink>
            </div>
          )}
        </div>
        <div className="bg-[#D7DBE4] md:h-[630px] lg:h-[750px] w-full  rounded-br-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
