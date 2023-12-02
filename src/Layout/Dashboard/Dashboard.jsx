import {
  FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, 
  FaShoppingCart, FaUsers, FaUtensils
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hook/useUserRole";

const Dashboard = () => {
  const [role, isLoading] = useUserRole(); 

  if (isLoading) {
    return <div>Loading...</div>; 
  }


  const organizerNavLinks = (
    <>
      <li>
        <NavLink to="/dashboard/adminHome">
          <FaHome />
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addItems">
          <FaUtensils />
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageItems">
          <FaList />
          Manage Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/bookings">
          <FaBook />
          Manage Bookings
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/users">
          <FaUsers />
          All Users
        </NavLink>
      </li>
    </>
  );

  
  const healthcareProfessionalNavLinks = (
    <>
     
      <li>
        <NavLink to="/dashboard/patientManagement">
          
          Patient Management
        </NavLink>
      </li>
      
    </>
  );

  
  const participantNavLinks = (
    <>
      <li>
          <NavLink to="/dashboard/userHome">
          <FaHome />
          User Home
          </NavLink>
      </li>
      <li>
          <NavLink to="/dashboard/reservation">
          <FaCalendar />
          Reservation
          </NavLink>
      </li>
      <li>
          <NavLink to="/dashboard/cart">
          <FaShoppingCart />
          My Cart 
          </NavLink>
      </li>
      <li>
          <NavLink to="/dashboard/review">
          <FaAd />
          Add a Review
          </NavLink>
      </li>
      <li>
          <NavLink to="/dashboard/bookings">
          <FaList />
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
