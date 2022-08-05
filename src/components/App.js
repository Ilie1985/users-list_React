import React, { useState, Fragment } from "react";
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
    // React.Fragment --it`s an empty wrapper component built into React:it doesn`t render any real HTML element tot the DOM,but iy fulfills React`s/JSX requirement. The alternative to this is to import Fragment and use only Fragment ,instead of React.Fragment
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default App;
