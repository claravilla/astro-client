import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";

function ErrorPage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn && <Navbar loggedIn="true" url1="/profile" text1="My List" />}

      {!isLoggedIn && (
        <Navbar
          loggedIn="false"
          url1="/signup"
          text1="Sign Up"
          url2="/login"
          text2="Log in"
        />
      )}

      <div className="placeholder-page">
        <h2 className="placeholder-title">
          You're heading towards a Black Hole, turn back!
        </h2>
        <ButtonLink url="/" text="Back Home" classProp="btn-link-dark" />
        <img
          src="https://cdn.shopify.com/s/files/1/0077/0038/1751/files/dark-blue-black-hole_medium.gif?v=1556892998"
          alt="Black Hole"
        ></img>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorPage;
