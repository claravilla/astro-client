import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import ObjectCard from "../components/ObjectCard";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import telescope from "../images/telescope.gif";

function ObjectList() {
  const url = "http://localhost:5005/api/astro-objects";
  const [objectsData, setObjectsData] = useState([]);
  const [objects, setObjects] = useState([]);
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        let messierOrdered = data.data.sort((a, b) => {
          return (
            parseInt(a.messier.substring(1)) - parseInt(b.messier.substring(1))
          );
        });
        setObjectsData(messierOrdered);
        setObjects(messierOrdered);
        setContentIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <h1 className="header-obj-list">Messier Catalogue</h1>
      <div className="my-container">
        {contentIsLoading && (
          <div className="placeholder-page">
            <h2 className="placeholder-title">Telescope is focusing...</h2>
            <img
              className="placeholder-img"
              src={telescope}
              alt="telescope"
            ></img>
          </div>
        )}

        {!contentIsLoading &&
          objects.map((eachObject) => {
            return <ObjectCard object={eachObject} key={eachObject._id} />;
          })}
        <Footer />
      </div>
    </div>
  );
}

export default ObjectList;
