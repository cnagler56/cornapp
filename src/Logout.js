import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      console.log("Logging out...");

      try {
        const response = await fetch('/logout', {
          method: 'POST',
          credentials: 'include',  
        });

        if (response.ok) {
          localStorage.removeItem('user');  
          navigate('/login');  
        } else {
          console.error("Logout failed");
        }
      } catch (error) {
        console.error("Error logging out", error);
      }
    };

    performLogout();
  }, [navigate]);

  return <div>Logging out...</div>; // Ensures the component renders something
};

export default Logout;
