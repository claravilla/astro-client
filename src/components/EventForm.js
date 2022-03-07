import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/*props should receive the value of the fields and the onSubmit function (add or edit)

can i built  a submit function that takes a url as parameters


<EventForm eventData={object} from catallogue or {eventData} from edit submitUrl={edit route} or {add route}
and in form onSumit={submitForm({props.submitUrl})}
 cosnt submitform = (url) =>{
     axios.post(url,object)
 }


*/

function EventForm(props) {
  const [name, setName] = useState("");
  const [messier, setMessier] = useState(""); //might not need this as state var
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [observations, setObservations] = useState("");
  const [img, setImg] = useState("");
  const [season, setSeason] = useState("");
  const [score, setScore] = useState(0); //might not need this as state var
  const [difficulty, setDifficulty] = useState("");
  const [ojectCatalogueId, setObjectCatalogueId] = useState(""); //might not need this as state var
  const [seen, setSeen] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useContext(AuthContext);

  const url = "http://localhost:5005/api/events";

  const navigate = useNavigate();

  const event = {
    name: name,
    when: time,
    where: place,
    observations: observations,
    season: season,
    difficulty: difficulty,
    seen: seen,
    score: score, //to be update from the axios call
    ojectCatalogueId: ojectCatalogueId, //to be update from the axios call
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
        setMessier("");
        setTime("");
        setPlace("");
        setObservations("");
        setSeason("");
        setScore(0);
        setDifficulty("");
        setObjectCatalogueId("");
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
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
