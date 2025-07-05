import { Tooltip } from "@material-tailwind/react";
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

const SidePanelSmall = () => {
  const [isAdmin] = useAdmin();
  const {isDeliveryMan} = useDeliveryMan();
  return (
    <div>
      {isAdmin ? (
        <div>
          <div className="flex flex-row gap-8 ml-4">
            <NavLink
              to="/dashboard/allParcels"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#F5AB35] flex-row gap-1  items-center text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <Tooltip content="All Parcels">
                <p>
                  <FaRegListAlt className="text-xl" />
                </p>
              </Tooltip>
            </NavLink>
            <NavLink
              to="/dashboard/allUsers"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-row gap-1  items-center text-[#F5AB35] text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <Tooltip content="All Users">
                <p>
                  <FaUsersViewfinder className="text-xl" />
                </p>
              </Tooltip>
            </NavLink>
            <NavLink
              to="/dashboard/allDeliveryMan"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#F5AB35] flex-row gap-1  items-center text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <Tooltip content="All Delivery Men">
                <p>
                  <FaUsersCog className="text-xl" />
                </p>
              </Tooltip>
            </NavLink>
            <NavLink
              to="/dashboard/statistics"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#F5AB35] flex-row gap-1  items-center text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <Tooltip content="Statistics">
                <p>
                  <MdOutlineAutoGraph className="text-xl" />
                </p>
              </Tooltip>
            </NavLink>
          </div>
        </div>
      ) : isDeliveryMan ? (
        <div>
          <div className="flex flex-row gap-4 ml-4">
            <NavLink
              to="/dashboard/deliveryList"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#F5AB35] flex-row gap-1  items-center text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <FaList />
              My Delivery List
            </NavLink>
            <NavLink
              to="/dashboard/reviews"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-row gap-1  items-center text-[#F5AB35] text-sm font-semibold"
                  : "flex flex-row gap-1  items-center text-sm font-semibold text-white"
              }
            >
              <FaRegComment />
              My Reviews
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default SidePanelSmall;
