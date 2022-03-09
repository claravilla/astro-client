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
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const userId = user._id;

  const url = process.env.REACT_APP_API_URL + "/api/events";

  //fetching token to send it in the header as the event routes are protected behing JTW auth
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((data) => {
        const userEvents = data.data.filter((eachEvent) => {
          return eachEvent.userId === userId;
        });
        setEventsData(userEvents);
        setContentIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }, [userId]);

  return (
    <div>
      <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
      <div className="my-profile">
        <h1>Welcome back {user.username}</h1>
        <div className="profile-blurb">
          <h3>Create your watching list</h3>
          <ButtonLink
            classProp="btn-link-dark"
            url="/add-event"
            text="Add New Event"
          />
        </div>
        <h2>Your Watching List</h2>

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
          <div className="my-event">
            {eventsData.map((eachEvent) => {
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
