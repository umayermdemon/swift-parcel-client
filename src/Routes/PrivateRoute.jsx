import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();
  if (loader) {
    return (
      <div className="w-full min-h-screen h-full flex items-center justify-center bg-[#0E3557]">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="white"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
