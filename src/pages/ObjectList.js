import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import ObjectCard from "../components/ObjectCard";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import telescope from "../images/telescope.gif";
import SearchBar from "../components/SearchBar";
import ObjectListFilters from "../components/ObjectListFilters";

function ObjectList() {
  const url = process.env.REACT_APP_API_URL + "/api/astro-objects";
  // const url = "https://astro-watch-list.herokuapp.com/api/astro-objects";
  const [objectsData, setObjectsData] = useState([]);
  const [objects, setObjects] = useState([]);
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage(error.message);
      });
  }, []);

  const handleSearch = (input) => {
    const searchedObjects = objectsData.filter((eachObject) => {
      return (
        eachObject.commonName.toLowerCase().includes(input) ||
        eachObject.messier.toLowerCase().includes(input)
      );
    });
    setObjects(searchedObjects);
  };

  const handleFilters = (difficulty, season, type) => {
    console.log("handle filter");
    let filteredObjects = [];

    if (difficulty !== "0") {
      filteredObjects = objectsData.filter((eachObject) => {
        return eachObject.difficulty === difficulty;
      });
    } else {
      filteredObjects = objectsData;
    }

    if (season !== "0") {
      filteredObjects = filteredObjects.filter((eachObject) => {
        return eachObject.season === season;
      });
    }

    if (type !== "0") {
      filteredObjects = filteredObjects.filter((eachObject) => {
        return eachObject.object === type;
      });
    }

    setObjects(filteredObjects);
  };

  const resetCatalogue = () => {
    setObjects(objectsData);
  };

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
      <div className="custom-list-section">
        <SearchBar handleSearch={handleSearch} resetSearch={resetCatalogue} />
        <ObjectListFilters
          handleFilters={handleFilters}
          resetFilters={resetCatalogue}
        />
      </div>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
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

        {!contentIsLoading && objects.length === 0 && (
          <div className="alert alert-info" role="alert">
            Sorry, we couldn't find any results.
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
