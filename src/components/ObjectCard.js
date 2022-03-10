import { Link } from "react-router-dom";

function ObjectCard(props) {
  return (
    <div className="my-card light-blue">
      <img
        src={props.object.image}
        className="my-card-img"
        alt={props.object.messier}
      ></img>
      <h5>{`${props.object.messier} ${props.object.commonName}`}</h5>
      <p>{props.object.object}</p>
      <Link
        to={`/objects/${props.object._id}`}
        className="object-card-btn dark-blue"
      >
        See Details
      </Link>
    </div>
  );
}

export default ObjectCard;
