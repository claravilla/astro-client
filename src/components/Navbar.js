import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ButtonLink from "./ButtonLink";
import logo from "../images/logo.png";

function Navbar(props) {
  const { logoutUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <div className="navbar-right">
        {props.url3 && (
          <ButtonLink
            classProp="btn-link-light"
            url={props.url3}
            text={props.text3}
          />
        )}
        <ButtonLink
          classProp="btn-link-light"
          url={props.url1}
          text={props.text1}
        />
        {props.loggedIn === "true" && (
          <button className="btn-link-light" type="submit" onClick={logoutUser}>
            Logout
          </button>
        )}
        {props.loggedIn === "false" && (
          <ButtonLink
            classProp="btn-link-light"
            url={props.url2}
            text={props.text2}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
