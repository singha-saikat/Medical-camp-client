import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hook/useUserRole";

 // Custom hook to identify user role

const Dashboard = () => {
  const role = useUserRole(); // Get the current user's role

  // Define NavLinks for different roles
  const organizerNavLinks = (
    <>
      <li>
        <NavLink to="/dashboard/adminHome">
          <FaHome></FaHome>
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addItems">
          <FaUtensils></FaUtensils>
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageItems">
          <FaList></FaList>
          Manage Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/bookings">
          <FaBook></FaBook>
          Manage Bookings
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/users">
          <FaUsers></FaUsers>
          All Users
        </NavLink>
      </li>
    </>
  );

  const healthcareProfessionalNavLinks = (
    <>
      {/* Links specific to Healthcare Professionals */}
      {/* ... */}
    </>
  );

  const participantNavLinks = (
    <>
        <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            Reservation
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart 
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/review">
            <FaAd></FaAd>
            Add a Review
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/bookings">
            <FaList></FaList>
            My Bookings
            </NavLink>
        </li>
    </>
  );

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {role === "Organizer" && organizerNavLinks}
          {role === "HealthcareProfessional" && healthcareProfessionalNavLinks}
          {role === "Participant" && participantNavLinks}

          {/* Shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
