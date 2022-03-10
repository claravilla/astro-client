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
        const sortedUsers = data.data.sort((a, b) => {
          //sorting user per score and if equal, totalSeen
          if (a.score > b.score) {
            return -1;
          } else if (a.score < b.score) {
            return 1;
          } else {
            if (a.totalSeen > b.totalSeen) {
              return -1;
            } else {
              return 1;
            }
          }
        });
        const leaderUsers = sortedUsers.slice(0, 3); //only displaying the top 3 users
        setUser(leaderUsers);
      })
      .catch((error) => {
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
            <th>Total Seen*</th>
            <th>Current Score*</th>
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
      <p>
        Based on Messier objects only when your event is created from the
        catalogue
      </p>
    </div>
  );
}

export default LeaderBoard;
