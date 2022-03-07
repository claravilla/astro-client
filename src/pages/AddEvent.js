import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";

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
        <EventForm
          cancelUrl="/profile"
          url="http://localhost:5005/api/events"
          method="post"
        />
        <Footer />
      </div>
    </div>
  );
}

export default AddEvent;
