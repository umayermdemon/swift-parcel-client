import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/logo/logo3.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaPowerOff, FaUser } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useAuth();

  const handelLogout = () => {
    logOut();
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 text-black lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="p-1 font-semibold">
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography className="p-1 font-semibold">
        <a href="#" className="flex items-center">
          Dashboard
        </a>
      </Typography>
      <Typography className="p-1 font-semibold">
        <a href="#" className="flex items-center">
          Notification icon
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="sticky top-0 z-10 h-max ">
      <Navbar className=" lg:max-h-[768px]  max-w-full rounded-none border-none shadow-none px-4 py-2 lg:px-16">
        <div className="flex items-center  justify-between text-blue-gray-900">
          <Typography className="mr-4  flex items-center gap-2 font-cinzel text-3xl text-[#0B2D42] cursor-pointer py-1.5 font-bold">
            <img src={logo} alt="" className="w-16" />
            <div className="flex items-center md:text-4xl">
              <p className="text-5xl md:text-7xl">S</p>
              <sub>wift</sub>
            </div>
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            {user ? (
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
                    <Typography className="flex gap-3 items-center">
                      <FaUser /> {user?.displayName}
                    </Typography>
                    <Link to="/dashboard">
                      <Typography className="flex my-4 gap-3 items-center">
                        <MdOutlineDashboardCustomize /> Dashboard
                      </Typography>
                    </Link>
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
            )}
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
        <MobileNav open={openNav}>
          {navList}
          {user ? (
            <span></span>
          ) : (
            <div className="flex items-end gap-x-1">
              <Link to="/login">
                <Button fullWidth variant="gradient" size="sm" className="">
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button fullWidth variant="gradient" size="sm" className="">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
