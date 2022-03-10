import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonLink from "../components/ButtonLink";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setToken, checkIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = process.env.REACT_APP_API_URL + "/api/auth/signup";

  const signupUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log(newUser);
    axios
      .post(url, newUser)
      .then((data) => {
        const authToken = data.data.authToken;
        setUsername("");
        setEmail("");
        setPassword("");
        setToken(authToken);
        checkIsAuthenticated();

        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <Navbar
        loggedIn="false"
        url1="/signup"
        text1="Sign Up"
        url2="/login"
        text2="Log in"
      />
      <form className="form" onSubmit={signupUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
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
        <div className="form-buttons-section">
          <ButtonLink classProp="btn-link-dark" url="/" text="Cancel" />
          <button className="form-submit-btn" type="submit">
            Sign up
          </button>
        </div>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <Footer />
    </div>
  );
}

export default Signup;
