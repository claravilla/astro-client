import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={signupUser}>
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
    </div>
  );
}

export default Signup;
