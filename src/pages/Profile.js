
import axios from "axios";
import {useContext, useState, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



function Profile() {

  const {user} = useContext(AuthContext);
  const [eventsData, setEventsData] = useState([]);
  const [events, setEvents] = useState([])


  return <div>
  <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
  <h1>Welcome back {user.username}</h1>
  <ButtonLink classProp="btn-link-dark" url="/addEvent" text="Add New Event"/>
  <Footer/>
  </div>;
}

export default Profile;
