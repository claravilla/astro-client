import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer"

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const url = "http://localhost:5005/api/auth/signup";

  const signupUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    axios
      .post(url, newUser)
      .then((data) => {
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
        <button type="submit">Sign up</button>
      </form>
      <Footer/>
    </div>
  );
}

export default Signup;
