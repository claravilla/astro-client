import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";
import telescope from "../images/telescope.gif";

function AddEventFromCatalogue() {
  const _id = useParams();
  const [objectData, setObjectData] = useState({});
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const url = process.env.REACT_APP_API_URL + "/api/astro-objects/" + _id.id;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log(data.data);
        setObjectData(data.data);
        setContentIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      <Navbar
        loggedIn="true"
        url1="/profile"
        text1="My List"
        url3="/objects"
        text3="Catalogue"
      />
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

      {!contentIsLoading && (
        <div>
          <EventForm
            eventData={objectData}
            cancelUrl={`/objects/${objectData._id}`}
          />
          {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AddEventFromCatalogue;
