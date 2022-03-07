import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ButtonLink from "../components/ButtonLink";

/*props should receive the value of the fields and the onSubmit function (add or edit)

can i built  a submit function that takes a url as parameters


<EventForm eventData={object} from catallogue or {eventData} from edit submitUrl={edit route} or {add route}
and in form onSumit={submitForm({props.submitUrl})}
 cosnt submitform = (url) =>{
     axios.post(url,object)
 }


*/

function EventForm(props) {
  let myEventData = {};
  //if event is coming from the catalogue, a props with object data is passed.
  //if event is coming from my profile, the props obj is empty

  if (props.eventData === undefined) {
    myEventData = {}; //creating an empty object so it can be referenced without errors
    //setting its property to empty string so the form doesn't display undefined
    myEventData.commonName = "";
    myEventData.messier = "";
    myEventData.season = "";
    myEventData.difficulty = "";
  } else {
    myEventData = Object.assign({}, props.eventData); //assigning to my object so it can be referenced in the form
  }

  //set value of form input from the object catalogue (if any)
  const [name, setName] = useState(
    `${myEventData.commonName} ${myEventData.messier}`
  );
  const [img, setImg] = useState(myEventData.image);
  const [season, setSeason] = useState(myEventData.season);
  const [difficulty, setDifficulty] = useState(myEventData.difficulty);

  //set value of form input specific to the event to blank

  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [observations, setObservations] = useState("");
  const [seen, setSeen] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useContext(AuthContext);

  const url = "http://localhost:5005/api/events";

  const navigate = useNavigate();

  const event = {
    name: name,
    time: time,
    place: place,
    observations: observations,
    season: season,
    difficulty: difficulty,
    seen: seen,
    score: myEventData.score,
    ojectCatalogueId: myEventData._id,
    userId: user._id,
  };

  const addEvent = (e) => {
    e.preventDefault();
    console.log(event);
    console.log(url);
    axios
      .post(url, event)
      .then((response) => {
        console.log("event added: " + response.data);
        setName("");
        setTime("");
        setPlace("");
        setObservations("");
        setSeason("");
        setDifficulty("");
        setSeen("");

        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.error);
      });
  };

  //set messier from the catalogue
  //fill name with messier and commonName
  return (
    <div>
      <form className="form" onSubmit={addEvent}>
        {/* <img src={img} alt={name}></img> */}
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Season</label>
        <select
          name="season"
          value={season}
          onChange={(e) => {
            setSeason(e.target.value);
          }}
        >
          <option value="">Please select one</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
        </select>
        <label>Difficulty</label>
        <select
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option value="">Please select one</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <label>When</label>
        <input
          type="date"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        ></input>
        <label>Where</label>
        <input
          type="text"
          value={place}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        ></input>
        <label>Observations</label>
        <input
          type="textarea"
          value={observations}
          onChange={(e) => {
            setObservations(e.target.value);
          }}
        ></input>
        <label>Seen</label>
        <select value={seen} onChange={(e) => setSeen(e.target.value)}>
          <option value="">Please select one</option>
          <option value="true">Seen</option>
          <option value="false">Not Seen</option>
        </select>
        <div className="form-buttons">
          <ButtonLink classProp="btn-link-dark" url="/profile" text="Cancel" />
          <button type="submit">Add Event</button>
        </div>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default EventForm;
