import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import CampDetailsPage from "../Pages/CampDetailsPage /CampDetailsPage";
import LoginPage from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddCampPage from "../Pages/Dashboard/AddCampPage/AddCampPage";
import ManageCamps from "../Pages/Dashboard/ManageCamp/ManageCamps";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ParticipantProfilePage from "../Pages/Dashboard/ParticipantProfilePage/ParticipantProfilePage";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import HealthcareProfessionalHome from "../Pages/Dashboard/healthcareProfessionalHome/healthcareProfessionalHome";
import HealthcareProfessionalProfilePage from "../Pages/Dashboard/HealthcareProfessionalProfilePage/HealthcareProfessionalProfilePage";
// import RegisteredCamps from "../Pages/Dashboard/Registered Camps/RegisteredCamps";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path:'/camp-Details/:_id',
            element: <CampDetailsPage/>,
        },
        {
            path:'/availableCamp',
            element: <AvailableCamps/>,
        },
        {
            path:'/login',
            element: <LoginPage/>,
        },
        {
            path:'/signUp',
            element: <SignUp/>,
        },

        
      ],
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/adminHome',
            element: <AdminHome></AdminHome>
          },
          {
            path: '/dashboard/add-a-camp',
            element: <AddCampPage></AddCampPage>
          },
        
          {
            path: '/dashboard/manageCamps',
            element: <ManageCamps></ManageCamps>
          },
          {
            path: '/dashboard/userHome',
            element: <UserHome></UserHome>
          },
          {
            path: '/dashboard/participant-profile',
            element: <ParticipantProfilePage></ParticipantProfilePage>
          },
          {
            path: '/dashboard/healthcareProfessionalHome',
            element: <HealthcareProfessionalHome></HealthcareProfessionalHome>
          },
          {
            path: '/dashboard/professional-profile',
            element: <HealthcareProfessionalProfilePage></HealthcareProfessionalProfilePage>
          },
          // {
          //   path: '/dashboard/registered-camps',
          //   element: <RegisteredCamps></RegisteredCamps>
          // },
        //   {
        //     path: '/dashboard/manageItems',
        //     element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        //   },
        //   {
        //     path: '/dashboard/updateItem/:id',
        //     element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        //     loader: ({params}) => fetch(`http://localhost:4000/menu/${params.id}`)
        //   },
        //   {
        //     path: '/dashboard/users',
        //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        //   },
  
        ]
      }
  ]);

  export default routes;