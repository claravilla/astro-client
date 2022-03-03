function ObjectCard(props) {
  return (
    <div className="myCard light-blue">
      <img
        src={props.object.image}
        className="card-img-top"
        alt={props.object.messier}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{`${props.object.messier} ${props.object.commonName}`}</h5>
        <p className="card-text">{props.object.object}</p>
        <a
          href={`/object/${props.object._id}`}
          className="object-card-btn dark-blue"
        >
          See Details
        </a>
      </div>
    </div>
  );
}

export default ObjectCard;
