import {useState, useContext} from "react";
import {AuthContext} from "../context/AuthContext"



/*props should receive the value of the fields and the onSubmit function (add or edit)

can i built  a submit function that takes a url as parameters


<EventForm eventData={object} from catallogue or {eventData} from edit submitUrl={edit route} or {add route}
and in form onSumit={submitForm({props.submitUrl})}
 cosnt submitform = (url) =>{
     axios.post(url,object)
 }


*/


function EventForm(props){
    const [name,setName] = useState("");
    const [messier,setMessier] = useState("");
    const [when,setWhen] = useState("");
    const [where,setWhere] = useState("");
    const [obs,setObs] = useState("");
    const [img,setImg] = useState("");
    const [season,setSeason] = useState("");
    const [score,setScore] = useState("");
    const [difficulty,setDifficulty] = useState("");

    const {user} = useContext(AuthContext);

    const event ={
        name: name,
        messier: messier,
        when: when,
        where:where,
        obs:obs,
        season:season,
        difficulty:difficulty,
        score:score,
        userId: user._id
    }

    console.log(user);
    console.log(event);


 //set messier from the catalogue 
 //fill name with messier and commonName
    return(
  <div>
  <form className="form">
  
     {/* <img src={img} alt={name}></img> */}
     <label>Name</label>
     <input type="text" value={name} required onChange={(e)=>{setName(e.target.value)}}></input>
     <label>Season</label>
     <select name="season" onChange={(e)=>{setSeason(e.target.value)}}>
        <option value="Winter">Winter</option>
         <option value="Spring">Spring</option>
         <option value="Summer">Summer</option>
         <option value="Autumn">Autumn</option>
     </select>
     <label>Difficulty</label>
     <select value={difficulty} onChange={(e)=>{setDifficulty(e.target.value)}}>
         <option value="Easy">Easy</option>
         <option value="Medium">Medium</option>
         <option value="Hard">Hard</option>
     </select>
     <label>When</label>
     <input type="date" value={when} onChange={(e)=>{setWhen(e.target.value)}}></input>
     <label>Where</label>
     <input type="text" value={where} onChange={(e)=>{setWhere(e.target.value)}}></input>
     <label>Observations</label>
     <input type="textarea" value={obs} onChange={(e)=>{setObs(e.target.value)}}></input>
     <button type="submit">Add Event</button>
  </form>

  </div>



    )
}


export default EventForm;