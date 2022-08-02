import React, { useState } from "react";
import "./App.css";
import AddUser from "../components/Users/AddUser";
import UsersList from "./Users/UsersList";

const App = (props) => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
