import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";

function AddEvent() {
  return (
    <div>
      <Navbar loggedIn="true" url1="/objects" text1="Catalogue" />
      <div>
        <EventForm />
        <Footer />
      </div>
    </div>
  );
}

export default AddEvent;
