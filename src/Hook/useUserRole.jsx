// import { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure"

const useUserRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userType, isLoading, isError } = useQuery({
      queryKey: [user?.email, 'userType'],
      queryFn: async () => {
          const res = await axiosSecure.get(`/users/role/${user.email}`);
          return res.data;
      }
  });

  if (isLoading) {
      // If the data is still loading
      return ["Loading", isLoading];
  } else if (isError) {
      // Handle error state
      console.error("Error fetching user role");
      return ["Error", isLoading];
  } else if (userType && userType.role) {
      // Check the role and return the corresponding string
      const { role } = userType;
      if (role === "Organizer") {
          return ["Organizer", isLoading];
      } else if (role === "HealthcareProfessional") {
          return ["HealthcareProfessional", isLoading];
      } else {
          return ["Participant", isLoading];
      }
  }

  // If none of the conditions are met, it simply returns without a default value
  return ["Participant", isLoading];
};

export default useUserRole;
