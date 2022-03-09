import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonLink from "../components/ButtonLink";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setToken, checkIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = process.env.REACT_APP_API_URL + "/api/auth/login";

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post(url, { email: email, password: password })
      .then((response) => {
        const authToken = response.data.authToken;
        setToken(authToken);
        checkIsAuthenticated();
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
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
      <form className="form" onSubmit={handleLogin}>
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
          <button type="submit" className="form-submit-btn">
            Login
          </button>
        </div>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <Footer />
    </div>
  );
}

export default Login;
