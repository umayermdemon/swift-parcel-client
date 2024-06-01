import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import NavUp from "../Shared/NavUp/NavUp";


const Layout = () => {
  return (
    <div>
      <NavUp/>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Layout;