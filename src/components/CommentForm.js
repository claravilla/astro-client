import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function CommentForm(props) {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const createComment = (e) => {
    e.preventDefault();

    const date = new Date();
    let timestamp = date.toString();
    timestamp = timestamp.substring(0, timestamp.indexOf("G") - 1);

    const comment = {
      username: user.username,
      date: timestamp,
      objectCatalogueId: props.objectCatalogueId,
      text: text,
    };

    //fetching token as this is a protected route
    const token = localStorage.getItem("authToken");

    const url = "http://localhost:5005/api/comments";

    axios
      .post(url, comment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // navigate(`/objects/${props.objectCatalogueId}`);
        navigate("/objects");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  };

  return (
    <div className="comment-form-section">
      <form onSubmit={createComment} className="comment-form">
        <input
          type="textarea"
          value={text}
          placeholder="Type your comment here ..."
          required
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="comment-btn" type="submit">
          Post comment
        </button>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default CommentForm;
