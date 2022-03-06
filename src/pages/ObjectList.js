import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import ObjectCard from "../components/ObjectCard";
import Navbar from "../components/Navbar";
import {AuthContext} from "../context/AuthContext"


function ObjectList() {
  const url = "http://localhost:5005/api/astro-objects";
  const [objectsData, setObjectsData] = useState([]);
  const [objects, setObjects] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const{isLoggedIn} = useContext(AuthContext);



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
    <div>
    {isLoggedIn && <Navbar loggedIn="true" url1="/profile" text1="My List" />}

    {!isLoggedIn && <Navbar loggedIn="false" url1="/signup" text1="Sign Up"  url2="/login" text2="Log in" />}
   
    <div className="my-container">
    <h1>Messier Catalogue</h1>
      {isLoading && <div>Telescope is focusing...</div>}

      {!isLoading &&
        
        objects.map((eachObject) => {
          return <ObjectCard object={eachObject} key={eachObject._id} />;
        })}
        <Footer/>
    </div>
    </div>
  );
}

export default ObjectList;
