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
        console.log(data.data[0]);
        setObjectsData(data.data);
        setObjects(data.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="myContainer">
      {isLoading && <div>Content Laoding...</div>}

      {!isLoading &&
        objects.map((eachObject) => {
          return <ObjectCard object={eachObject} key={eachObject._id} />;
        })}
    </div>
  );
}

export default ObjectList;
