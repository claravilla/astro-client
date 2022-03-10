function CommentCard(props) {
  return (
    <div className="comment-card">
      <p className="comment-title">
        Created by <b>{props.comment.username} </b>on {props.comment.date}
      </p>
      <p>
        <em>{props.comment.text}</em>
      </p>
    </div>
  );
}

export default CommentCard;
