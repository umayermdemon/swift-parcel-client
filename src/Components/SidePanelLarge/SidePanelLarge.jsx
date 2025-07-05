import {
  FaBook,
  FaList,
  FaRegComment,
  FaRegListAlt,
  FaTruck,
  FaUser,
  FaUsersCog,
} from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useDeliveryMan from "../../hooks/useDeliveryMan";
import { Triangle } from "react-loader-spinner";

const SidePanelLarge = () => {
  const [isAdmin] = useAdmin();
  const [isDeliveryMan, isLoading] = useDeliveryMan();
  if (isLoading) {
    return (
      <div className="ml-24">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="white"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div className="pb-12">
      {isAdmin ? (
        <div className="mx-4 lg:mx-8 mb-8 mt-12 space-y-8">
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
        </div>
      ) : isDeliveryMan ? (
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
      ) : (
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
    </div>
  );
};

export default SidePanelLarge;
