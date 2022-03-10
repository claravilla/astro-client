import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import PictureOfTheDay from "../components/PictureOfTheDay";
import ButtonLink from "../components/ButtonLink";
import LeaderBoard from "../components/LeaderBoard";
import Footer from "../components/Footer";

function HomePage() {
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
      <div className="home-page-intro">
        <h1>Welcome to AstroList</h1>
        <PictureOfTheDay />
        <h3>
          Do you want to know what's out there? <br />
          Do you need to plan your next observation trip?
        </h3>
        <h4>
          Browse the Messier Catalogue to choose your next challenge. <br />
          Sign up to create your own watching list and start your ascent in the
          Leader Board!
        </h4>

        <ButtonLink
          classProp="btn-margin btn-link-dark "
          url="/objects"
          text="Browse the catalogue"
        />
      </div>
      <LeaderBoard />
      <Footer />
    </div>
  );
}

export default HomePage;
