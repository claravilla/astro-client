import ButtonLink from "./ButtonLink"
import logo from "../images/logo.png"


function Navbar(props) {
    return(
        <div className="navbar">
        <a href="/"><img src={logo} alt="logo"></img></a>
            <div className="navbar-right">
            <ButtonLink class="btn-link-light" url={props.url1} text={props.text1}/>
            <ButtonLink class="btn-link-light" url={props.url2} text={props.text2}/>
            </div>
        </div>
    )
}

export default Navbar;