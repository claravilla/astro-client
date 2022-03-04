import axios from "axios";
import { useState, useEffect } from "react";
import ObjectCard from "../components/ObjectCard";

function ObjectList() {
  const url = "http://localhost:5005/api/astro-objects";
  const [objectsData, setObjectsData] = useState([]);
  const [objects, setObjects] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        let messierOrdered = data.data.sort((a, b) => {
          return (
            parseInt(a.messier.substring(1)) - parseInt(b.messier.substring(1))
          );
        });
        setObjectsData(messierOrdered);
        setObjects(messierOrdered);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="my-container">
      {isLoading && <div>Telescope is focusing...</div>}

      {!isLoading &&
        objects.map((eachObject) => {
          return <ObjectCard object={eachObject} key={eachObject._id} />;
        })}
    </div>
  );
}

export default ObjectList;
