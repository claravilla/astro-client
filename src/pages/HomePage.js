import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {AuthContext} from "../context/AuthContext"



function HomePage() {
  const {isLoggedIn} = useContext(AuthContext);
  return <div>
   {isLoggedIn && <Navbar loggedIn="true" url1="/profile" text1="My List" />}

{!isLoggedIn && <Navbar loggedIn="false" url1="/signup" text1="Sign Up"  url2="/login" text2="Log in" />}  

  <Footer/></div>;
}

export default HomePage;
