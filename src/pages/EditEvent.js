import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";
import telescope from "../images/telescope.gif";

function EditEvent(props) {
  const { id } = useParams();
  console.log(id);
  const [errorMessage, setErrorMessage] = useState("");
  const [eventData, setEventData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:5005/api/events/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        data.data.commonName = data.data.name;
        data.data.messier = "";
        delete data.data.name;
        setEventData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.error);
      });
  }, [id]);

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

      {!isLoading && <EventForm eventData={eventData} url={url} method="put" />}
      <Footer />
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default EditEvent;
