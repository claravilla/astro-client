import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

function EditEventForm(props) {
  const [name, setName] = useState(props.eventData.name);
  const [objectType, setObjectType] = useState(props.eventData.object);
  const [season, setSeason] = useState(props.eventData.season);
  const [difficulty, setDifficulty] = useState(props.eventData.difficulty);
  const [seen, setSeen] = useState(props.eventData.seen);
  const [time, setTime] = useState(props.eventData.time);
  const [place, setPlace] = useState(props.eventData.place);
  const [observations, setObservations] = useState(
    props.eventData.observations
  );

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const event = {
    name: name,
    object: objectType,
    time: time,
    place: place,
    observations: observations,
    season: season,
    difficulty: difficulty,
    seen: seen,
    score: props.eventData.score,
    objectCatalogueId: props.eventData.objectCatalogueId,
    userId: props.eventData.userId,
  };

  const editEvent = (e) => {
    e.preventDefault();
    const url =
      process.env.REACT_APP_API_URL + "/api/events/" + props.eventData._id;

    //fetchin the token as the event route is protected
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(url, event, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        setName("");
        setObjectType("");
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
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <form className="form" onSubmit={editEvent}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Type</label>
        <input
          type="text"
          value={objectType}
          onChange={(e) => {
            setObjectType(e.target.value);
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
          type="text"
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
        <div className="form-buttons-section">
          <ButtonLink classProp="btn-link-dark" url="/profile" text="Cancel" />
          <button className="form-submit-btn" type="submit">
            Edit Event
          </button>
        </div>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default EditEventForm;
