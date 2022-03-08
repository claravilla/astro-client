function CommentCard(props) {
  return (
    <div className="comment-card">
      <p className="comment-title">
        Created by {props.comment.username} on {props.comment.date}
      </p>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default CommentCard;
