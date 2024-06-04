import { FaBook, FaList, FaRegComment, FaRegListAlt, FaTruck, FaUser, FaUsersCog } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";
import { NavLink } from "react-router-dom";


const SidePanelLarge = () => {
  const isAdmin = false;
  const isUser = true;
  const isDeliveryMan =false;
  return (
    <div>
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
  );
};

export default SidePanelLarge;