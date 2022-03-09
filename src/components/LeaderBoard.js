import axios from "axios";
import { useState, useEffect } from "react";

function LeaderBoard() {
  const [user, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "/api/users";
    axios
      .get(url)
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className="board-section">
      <h2 className="board-title">Leader board</h2>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <table className="leader-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Total Seen</th>
            <th>Current Score</th>
          </tr>
        </thead>
        <tbody>
          {user.map((eachUser) => {
            return (
              <tr key={eachUser.id}>
                <td>{eachUser.username} </td>
                <td>{eachUser.totalSeen} </td>
                <td>{eachUser.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
