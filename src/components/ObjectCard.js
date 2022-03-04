function ObjectCard(props) {
  return (
    <div className="my-card light-blue">
      <img
        src={props.object.image}
        className="my-card-img"
        alt={props.object.messier}
      ></img>
      <h5 className="card-title">{`${props.object.messier} ${props.object.commonName}`}</h5>
      <p className="card-text">{props.object.object}</p>
      <a
        href={`/objects/${props.object._id}`}
        className="object-card-btn dark-blue"
      >
        See Details
      </a>
    </div>
  );
}

export default ObjectCard;
