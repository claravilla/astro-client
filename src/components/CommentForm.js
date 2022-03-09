import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function CommentForm(props) {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");

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

    props.newCommentHandler(comment);

    setText("");
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
    </div>
  );
}

export default CommentForm;
