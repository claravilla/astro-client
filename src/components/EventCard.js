import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function EventCard(props) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const deleteEvent = () => {
    console.log(props.event._id);
    const url =
      process.env.REACT_APP_API_URL + "/api/events/" + props.event._id;

    //fetchin the token as the event route is protected
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="my-card event-card">
      {props.event.ojectCatalogueId !== "" && (
        <Link
          className="title-a-tag"
          to={`/objects/${props.event.ojectCatalogueId}`}
        >
          <div className="event-header">
            <h3>{props.event.name}</h3>
            {props.event.seen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="green"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="red"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            )}
          </div>
        </Link>
      )}

      {props.event.ojectCatalogueId === "" && (
        <div className="event-header">
          <h3>{props.event.name}</h3>
          {props.event.seen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="green"
              className="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="red"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          )}
        </div>
      )}

      <table className="table-event">
        <tbody>
          <tr>
            <td className="table-header">Type:</td>
            <td>{props.event.object}</td>
          </tr>
          <tr>
            <td className="table-header">Season:</td>
            <td>{props.event.season}</td>
          </tr>
          <tr>
            <td className="table-header">Difficulty:</td>
            <td>{props.event.difficulty}</td>
          </tr>

          <tr>
            <td className="table-header">When:</td>
            <td>{props.event.time}</td>
          </tr>
          <tr>
            <td className="table-header">Where:</td>
            <td>{props.event.place}</td>
          </tr>
          <tr>
            <td className="table-header">Observations:</td>
            <td>{props.event.observations}</td>
          </tr>
        </tbody>
      </table>
      <div className="form-buttons-section">
        <Link to={`/edit-event/${props.event._id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#051367"
            className="bi bi-pencil-fill svg-btn"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </Link>
        <form onSubmit={deleteEvent}>
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#051367"
              className="bi bi-trash-fill svg-btn"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </form>
      </div>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default EventCard;
