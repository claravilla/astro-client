import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleObject() {
  const { id } = useParams();
  const [spaceObject, setSpaceObject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `http://localhost:5005/api/astro-objects/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setSpaceObject(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
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
              </tbody>
            </table>
          </div>
          <div>
            <h3>Where to find it </h3>
            <a href={spaceObject.imageMap}>
              <img
                className="map-img"
                src={spaceObject.imageMap}
                alt={`Map for ${spaceObject.messier}`}
              ></img>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleObject;
//  ngc: "NGC 1952",
//     latinName: "Taurus",
//     mag: 8,
//     messier: "M1",
//     distance: 6500,
//     englishName: "Bull",
//     dec: "+22:00:52.1",
//     ra: "05:34:31.97",
//     dimension: "6,0' x 4,0'",
//     season: "Winter",
//     discoveredBy: "Bévis",
//     object: "Supernova remnant",
//     imageMap: "http://www.lasam.ca/messier/M001.JPG",
//     commonName: "Crab Nebula",
//     image:
//       "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/crab-nebula-mosaic.jpg?itok=DNaRmPtc",
//     difficulty: "medium",
//     score: 15,
