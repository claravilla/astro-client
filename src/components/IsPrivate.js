import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import telescope from "../images/telescope.gif";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading)
    return (
      <div className="placeholder-page">
        <h2 className="placeholder-title">Telescope is focusing...</h2>
        <img className="placeholder-img" src={telescope} alt="telescope"></img>
      </div>
    );

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default IsPrivate;
