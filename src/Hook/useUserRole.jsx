import { useState, useEffect } from 'react';

const useUserRole = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const userData = {
        role: 'Organizer', 
      };
      setUserRole(userData.role);
    }, 1000); 
  }, []); 

  return userRole;
};

export default useUserRole;
