import { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {setToken} = useContext(AuthContext);
  const navigate = useNavigate();
  

  const url = "http://localhost:5005/api/auth/login";

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(url, { email: email, password: password })
      .then((response) => {
        const authToken = response.data.authToken;
        setToken(authToken);
        navigate("/");

      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      Login page
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default Login;
