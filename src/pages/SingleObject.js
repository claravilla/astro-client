import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CommentCard from "../components/CommentCard";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

function SingleObject() {
  const { id } = useParams();
  const [spaceObject, setSpaceObject] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

  const url = `http://localhost:5005/api/astro-objects/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setSpaceObject(data.data);
        setComments(data.data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {isLoggedIn && (
        <Navbar
          loggedIn="true"
          url1="/profile"
          text1="My List"
          url3="/object"
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
        />
      )}

      {isLoading && <p>Adjusting telescope lenses..</p>}
      {!isLoading && (
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
                  url={`/addEvent/${spaceObject._id}`}
                  text="Add Event"
                ></ButtonLink>
              </div>
            )}
          </div>
          <div className="obj-table">
            <table>
              <tbody>
                <tr>
                  <td className="obj-table-header">NGC reference</td>
                  <td>{spaceObject.ngc}</td>
                </tr>
                <tr>
                  <td className="obj-table-header">Visible in</td>
                  <td>{spaceObject.season}</td>
                </tr>
                <tr>
                  <td className="obj-table-header">Closest Constellation</td>
                  <td>{`${spaceObject.latinName} - ${spaceObject.englishName}`}</td>
                </tr>
                <tr>
                  <td className="obj-table-header">Coordinates</td>
                  <td>
                    Right Ascension: {spaceObject.ra}
                    <br />
                    Declination: {spaceObject.dec}
                  </td>
                </tr>
                <tr>
                  <td className="obj-table-header">Distance in Light Years</td>
                  <td>{spaceObject.distance}</td>
                </tr>
                <tr>
                  <td className="obj-table-header">Magnitude</td>
                  <td>{spaceObject.mag}</td>
                </tr>
                <tr>
                  <td className="obj-table-header">Difficulty</td>
                  <td>{spaceObject.difficulty}</td>
                </tr>
                <tr>
                  <td className="obj-table-header">Sky Map</td>
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
            {comments.map((eachComment) => {
              return <CommentCard comment={eachComment} />;
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default SingleObject;
