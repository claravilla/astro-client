// import axios from "axios";
// import { useState, useEffect } from "react";
// import houston from "../images/houston.gif";

// function PictureOfTheDay() {
//   const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`;

//   const [imageData, setImage] = useState("");
//   const [contentIsLoading, setContentIsLoading] = useState(true);

//   //  useEffect(
//   //     axios.get(url)
//   //     .then((response) => {
//   //         console.log(response.data);
//   //         setImage(response.data);
//   //         setIsLoading(false);
//   //     })
//   //     .catch((error)=>{
//   //         console.log(error);
//   //     }),[]

//   //  )

//   return (
//     <div>
//       {contentIsLoading && (
//         <div>
//           <h2 className="placeholder-text">Houston, do you copy?</h2>
//           {/* <img className="placeholder-img" src={houston} alt="ellipsis">            </img> */}
//         </div>
//       )}

//       {!contentIsLoading && (
//         <div>
//           <h1>NASA Picture of the day</h1>
//           {/* <h2>{imageData.title}</h2>
//             <img src={imageData.url} alt={imageData.title}></img>*/}
//         </div>
//       )}
//     </div>
//   );
// }

// export default PictureOfTheDay;
