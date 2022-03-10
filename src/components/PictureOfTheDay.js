import axios from "axios";
import { useState, useEffect } from "react";
import houston from "../images/houston.gif";

function PictureOfTheDay() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=" +
    process.env.REACT_APP_NASA_KEY;

  const [imageData, setImage] = useState("");
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setImage(response.data);
        setContentIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div>
      {contentIsLoading && (
        <div className=".placeholder-page">
          <p className="placeholder-text">Houston, do you copy?</p>
          <img className="placeholder-img" src={houston} alt="ellipsis"></img>
        </div>
      )}

      {!contentIsLoading && (
        <div className="nasa-section">
          <h3>
            NASA Picture of the day : <em>{imageData.title}</em>{" "}
          </h3>
          <img
            className="nasa-pic"
            src={imageData.url}
            alt={imageData.title}
          ></img>
        </div>
      )}
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default PictureOfTheDay;
