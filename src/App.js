import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";

import ObjectList from "../src/pages/ObjectList";
import SingleObject from "../src/pages/SingleObject";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Profile from "../src/pages/Profile";
import AddEvent from "../src/pages/AddEvent";
import EditEvent from "../src/pages/EditEvent";
import ErrorPage from "./pages/ErrorPage";
import AddEventFromCatalogue from "./pages/AddEventFromCatalogue";
import IsPrivate from "./components/IsPrivate";
import IsGuest from "./components/IsGuest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/objects" element={<ObjectList />} />
        <Route path="/objects/:id" element={<SingleObject />} />
        <Route
          path="/signup"
          element={
            <IsGuest>
              <Signup />
            </IsGuest>
          }
        />
        <Route
          path="/login"
          element={
            <IsGuest>
              <Login />
            </IsGuest>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route
          path="/addEvent"
          element={
            <IsPrivate>
              <AddEvent />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/addEvent/:id"
          element={
            <IsPrivate>
              <AddEventFromCatalogue />
            </IsPrivate>
          }
        />
        <Route
          path="/editEvent/:id"
          element={
            <IsPrivate>
              <EditEvent />
            </IsPrivate>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
