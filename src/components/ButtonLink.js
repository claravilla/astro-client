import { Link } from "react-router-dom";

function ButtonLink(props) {
  return (
    <Link className={props.classProp} to={props.url}>
      {props.text}
    </Link>
  );
}

export default ButtonLink;
