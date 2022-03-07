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
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:5005/api/astro-objects/${_id.id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log(data.data);
        setObjectData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
      {isLoading && (
        <div className="placeholder-page">
          <h2 className="placeholder-title">Telescope is focusing...</h2>
          <img
            className="placeholder-img"
            src={telescope}
            alt="telescope"
          ></img>
        </div>
      )}

      {!isLoading && (
        <div>
          <EventForm eventData={objectData} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AddEventFromCatalogue;