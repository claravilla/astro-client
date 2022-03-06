import ButtonLink from "./ButtonLink";
import logo from "../images/logo.png";
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";




function Navbar(props) {
    const {logoutUser} = useContext(AuthContext);
    return(
        <div className="navbar">
        <a href="/"><img src={logo} alt="logo"></img></a>
            <div className="navbar-right">
            <ButtonLink class="btn-link-light" url={props.url1} text={props.text1}/>
            {props.loggedIn==="true" && <button class="btn-link-light" type="submit" onClick={logoutUser}>Logout</button>}
            {props.loggedIn==="false" && <ButtonLink class="btn-link-light" url={props.url2} text={props.text2}/>}
  
            </div>
        </div>
    )
}

export default Navbar;