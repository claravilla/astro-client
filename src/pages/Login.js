import { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {setToken, checkIsAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();
  

  const url = "http://localhost:5005/api/auth/login";

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(url, { email: email, password: password })
      .then((response) => {
        const authToken = response.data.authToken;
        setToken(authToken);
        checkIsAuthenticated();
        navigate("/");

      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div >
    
      <form  className="form" onSubmit={handleLogin}>
        <label htmlFor="email">Email Address</label>
        <input
      
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          
        ></input>
        <label htmlFor="password" >Password</label>
        <input
        
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit" className="btn dark-blue">Login</button>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <Footer />
    </div>
  );
}

export default Login;
