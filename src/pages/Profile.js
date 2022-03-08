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
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // const userId = user._id;

  console.log(user._id);

  const url = `http://localhost:5005/api/events`;

  //fetching token to send it in the header as the event routes are protected behing JTW auth
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((data) => {
        const userEvents = data.data.filter((eachEvent) => {
          return eachEvent.userId === user._id;
        });
        setEventsData(userEvents);
        setEvents(userEvents);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user._id]);

  return (
    <div>
      <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
      <div className="my-profile">
        <h1>Welcome back {user.username}</h1>
        <div className="profile-blurb">
          <h3>Create your watching list</h3>
          <ButtonLink
            classProp="btn-link-dark"
            url="/addEvent"
            text="Add New Event"
          />
        </div>
        <h2>Your Watching List</h2>

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
