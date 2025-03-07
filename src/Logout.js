import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ handleLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await fetch("/logout", {
          method: "POST",
          credentials: "include",
        });

        if (response.ok) {
          document.cookie = "JSESSIONID=; Max-Age=0; path=/";
          navigate('/');
          handleLogout();  
        } else {
          console.error("Logout failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logOut();
  }, [navigate, handleLogout]);

  return <p>Logging out...</p>;
};

export default Logout;
