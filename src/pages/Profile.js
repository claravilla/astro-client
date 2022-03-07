import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import telescope from "../images/telescope.gif";

function Profile() {
  const { user } = useContext(AuthContext);
  const [eventsData, setEventsData] = useState([]);
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const userId = user._id;
  console.log(userId);

  const url = "http://localhost:5005/api/events";

  useEffect(() => {
    axios
      .get(url, {
        params: {
          userId: userId,
        },
      })
      .then((data) => {
        console.log(data.data);
        setEventsData(data.data);
        setEvents(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <div>
      <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
      <div className="my-profile">
        <h1>Welcome back {user.username}</h1>
        <ButtonLink
          classProp="btn-link-dark"
          url="/addEvent"
          text="Add New Event"
        />
        <h2>Your Watching List</h2>
        {events.length === 0 && (
          <div className="placeholder-page">
            <h2 className="placeholder-title">Telescope is focusing...</h2>
            <img
              className="placeholder-img"
              src={telescope}
              alt="telescope"
            ></img>
          </div>
        )}

        {events.length !== 0 && (
          <div className="my-event">
            {events.map((eachEvent) => {
              return <EventCard event={eachEvent} key={eachEvent._id} />;
            })}
          </div>
        )}

        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
