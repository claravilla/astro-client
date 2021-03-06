import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";
import telescope from "../images/telescope.gif";

function SingleObject() {
  const { id } = useParams();
  const [spaceObject, setSpaceObject] = useState({});
  const [comments, setComments] = useState([]);
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const url = process.env.REACT_APP_API_URL + "/api/astro-objects/" + id;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setSpaceObject(data.data);
        setComments(data.data.comments);
        setContentIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const submitComment = (comment) => {
    //fetching token as this is a protected route
    const token = localStorage.getItem("authToken");

    const url = process.env.REACT_APP_API_URL + "/api/comments";

    axios
      .post(url, comment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        return axios.get(url);
      })
      .then((data) => {
        const myObjectComments = data.data.filter((eachComment) => {
          return eachComment.objectCatalogueId === id;
        });
        setComments(myObjectComments);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <div>
      {isLoggedIn && (
        <Navbar
          loggedIn="true"
          url1="/profile"
          text1="My List"
          url3="/objects"
          text3="Catalogue"
        />
      )}
      {!isLoggedIn && (
        <Navbar
          loggedIn="false"
          url1="/signup"
          text1="Sign Up"
          url2="/login"
          text2="Log in"
          url3="/objects"
          text3="Catalogue"
        />
      )}

      {contentIsLoading && (
        <div className="placeholder-page">
          <h2 className="placeholder-title">Telescope is focusing...</h2>
          <img
            className="placeholder-img"
            src={telescope}
            alt="telescope"
          ></img>
        </div>
      )}
      {!contentIsLoading && (
        <div className="single-obj-container medium-blue">
          <div className="obj-header">
            <img
              src={spaceObject.image}
              alt={spaceObject.messier}
              className="my-card-img"
            ></img>
            <div className="obj-info">
              <h1>{spaceObject.messier}</h1>
              <h1>{spaceObject.commonName}</h1>
              <h2>{spaceObject.object}</h2>
              <h3>{`Discovered by: ${spaceObject.discoveredBy}`}</h3>
            </div>
            {isLoggedIn && (
              <div className="add-event-btn">
                <ButtonLink
                  classProp="btn-link-dark"
                  url={`/add-event/${spaceObject._id}`}
                  text="Add Event"
                ></ButtonLink>
              </div>
            )}
          </div>
          <div className="obj-table">
            <table>
              <tbody>
                <tr>
                  <td className="table-header">NGC reference</td>
                  <td>{spaceObject.ngc}</td>
                </tr>
                <tr>
                  <td className="table-header">Visible in</td>
                  <td>{spaceObject.season}</td>
                </tr>
                <tr>
                  <td className="table-header">Closest Constellation</td>
                  <td>{`${spaceObject.latinName} - ${spaceObject.englishName}`}</td>
                </tr>
                <tr>
                  <td className="table-header">Coordinates</td>
                  <td>
                    Right Ascension: {spaceObject.ra}
                    <br />
                    Declination: {spaceObject.dec}
                  </td>
                </tr>
                <tr>
                  <td className="table-header">Distance in Light Years</td>
                  <td>{spaceObject.distance}</td>
                </tr>
                <tr>
                  <td className="table-header">Magnitude</td>
                  <td>{spaceObject.mag}</td>
                </tr>
                <tr>
                  <td className="table-header">Difficulty</td>
                  <td>{spaceObject.difficulty}</td>
                </tr>
                <tr>
                  <td className="table-header">Sky Map</td>
                  <td>
                    <img
                      className="map-img"
                      src={spaceObject.imageMap}
                      alt={`Map for ${spaceObject.messier}`}
                    ></img>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="comments-section">
            <h3>Comments</h3>
            {comments.length === 0 && <p>No comments yet</p>}

            {comments.map((eachComment) => {
              return (
                <CommentCard comment={eachComment} key={eachComment._id} />
              );
            })}

            {isLoggedIn && (
              <CommentForm
                objectCatalogueId={id}
                newCommentHandler={submitComment}
              />
            )}
          </div>
          {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default SingleObject;
