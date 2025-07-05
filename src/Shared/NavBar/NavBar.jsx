import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/logo/logo3.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaPowerOff, FaUser } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { IoIosNotifications } from "react-icons/io";
import { LineWave } from "react-loader-spinner";
import useAdmin from "../../hooks/useAdmin";
import useDeliveryMan from "../../hooks/useDeliveryMan";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [isAdmin] = useAdmin();
  const [isDeliveryMan, isLoading] = useDeliveryMan();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logOut } = useAuth();

  const handelLogout = () => {
    logOut();
  };
  if (isLoading) {
    return (
      <div className="flex mx-auto justify-center items-center">
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#0B2D42"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    );
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 text-black lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      <Typography className="p-1 font-semibold">
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography className="p-1 font-semibold">
        <a className="flex items-center">
          <IoIosNotifications className="text-2xl" />
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="sticky top-0 z-10 h-max ">
      <Navbar className=" lg:max-h-[768px]  max-w-full rounded-none border-none shadow-none px-4 py-2 lg:px-16">
        <div className="flex items-center  justify-between text-blue-gray-900">
          <div className="mr-4  flex items-center gap-2 font-cinzel  text-[#0B2D42] cursor-pointer py-1.5 font-bold">
            <img src={logo} alt="" className="w-16" />
            <div className="flex flex-col ">
              <h2 className="text-2xl md:text-4xl"> Swift</h2>
              <h3 className="text-xl md:text-2xl"> Parcel</h3>
            </div>
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            {user ? (
              isAdmin ? (
                <div>
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
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="px-4 py-2">
                      <Typography className="flex gap-3 items-center">
                        <FaUser /> {user?.displayName}
                      </Typography>
                      <NavLink to="/dashboard/statistics">
                        <Typography className="flex my-4 gap-3 items-center">
                          <MdOutlineDashboardCustomize /> Dashboard
                        </Typography>
                      </NavLink>
                      <Typography
                        onClick={handelLogout}
                        className="flex cursor-pointer my-4 gap-3 items-center"
                      >
                        <FaPowerOff />
                        Log Out
                      </Typography>
                    </MenuList>
                  </Menu>
                </div>
              ) : !isDeliveryMan ? (
                <div>
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
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="px-4 py-2">
                      <Typography className="flex gap-3 items-center">
                        <FaUser /> {user?.displayName}
                      </Typography>
                      <NavLink to="/dashboard/userProfile">
                        <Typography className="flex my-4 gap-3 items-center">
                          <MdOutlineDashboardCustomize /> Dashboard
                        </Typography>
                      </NavLink>
                      <Typography
                        onClick={handelLogout}
                        className="flex cursor-pointer my-4 gap-3 items-center"
                      >
                        <FaPowerOff />
                        Log Out
                      </Typography>
                    </MenuList>
                  </Menu>
                </div>
              ) : (
                <div>
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
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="px-4 py-2">
                      <Typography className="flex gap-3 items-center">
                        <FaUser /> {user?.displayName}
                      </Typography>
                      <NavLink to="/dashboard/deliveryList">
                        <Typography className="flex my-4 gap-3 items-center">
                          <MdOutlineDashboardCustomize /> Dashboard
                        </Typography>
                      </NavLink>
                      <Typography
                        onClick={handelLogout}
                        className="flex cursor-pointer my-4 gap-3 items-center"
                      >
                        <FaPowerOff />
                        Log Out
                      </Typography>
                    </MenuList>
                  </Menu>
                </div>
              )
            ) : (
              <div className="flex items-center gap-x-1">
                <Link to="/login">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    Log In
                  </Button>
                </Link>
                <span className="hidden lg:inline-block">/</span>
                <Link to="/register">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}

            {/* {user ? (
              <div>
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
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList className="px-4 py-2">
                    <Typography className="flex gap-3 items-center">
                      <FaUser /> {user?.displayName}
                    </Typography>
                    <NavLink to="/dashboard">
                      <Typography className="flex my-4 gap-3 items-center">
                        <MdOutlineDashboardCustomize /> Dashboard
                      </Typography>
                    </NavLink>
                    <Typography
                      onClick={handelLogout}
                      className="flex cursor-pointer my-4 gap-3 items-center"
                    >
                      <FaPowerOff />
                      Log Out
                    </Typography>
                  </MenuList>
                </Menu>
              </div>
            ) : (
              <div className="flex items-center gap-x-1">
                <Link to="/login">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    Log In
                  </Button>
                </Link>
                <span className="hidden lg:inline-block">/</span>
                <Link to="/register">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )} */}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          {navList}
          {user ? (
            <span></span>
          ) : (
            <div className="flex items-end gap-x-1">
              <Link to="/login">
                <Button fullWidth size="sm" className="bg-[#0B2D42]">
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button fullWidth size="sm" className="bg-[#0B2D42]">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
