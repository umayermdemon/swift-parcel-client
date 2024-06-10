import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import NavUp from "../Shared/NavUp/NavUp";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const isLoginRegister =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {isLoginRegister || <NavUp />}
      {isLoginRegister || <NavBar />}
      <Outlet />
      {isLoginRegister || <Footer/>}
    </div>
  );
};

export default Layout;
