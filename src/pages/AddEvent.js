import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";
import Footer from "../components/Footer";

function AddEvent() {
  return (
    <div>
      <Navbar
        loggedIn="true"
        url1="/profile"
        text1="My List"
        url3="/objects"
        text3="Catalogue"
      />
      <div>
        <EventForm cancelUrl="/profile" />
        <Footer />
      </div>
    </div>
  );
}

export default AddEvent;
