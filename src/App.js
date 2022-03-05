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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/objects" element={<ObjectList />} />
        <Route path="/objects/:id" element={<SingleObject />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/editEvent/:id" element={<EditEvent />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
