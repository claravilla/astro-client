import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EditEventForm from "../components/EditEventForm";
import telescope from "../images/telescope.gif";

function EditEvent(props) {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [eventData, setEventData] = useState();
  const [contentIsLoading, setContentIsLoading] = useState(true);

  const url = process.env.REACT_APP_API_URL + "/api/events/" + id;
  useEffect(() => {
    //fetchin the token as the event route is protected
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((data) => {
        setEventData(data.data);
        setContentIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }, [id]);

  return (
    <div>
      <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
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

      {!contentIsLoading && <EditEventForm eventData={eventData} />}
      <Footer />
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default EditEvent;
