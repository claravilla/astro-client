import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext();
const url = process.env.REACT_APP_API_URL + "/api/auth/verify";

function AuthContextWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const checkIsAuthenticated = () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setIsLoading(false);
          setIsLoggedIn(true);
          setUser(response.data);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    checkIsAuthenticated();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setToken,
        checkIsAuthenticated,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextWrapper };
