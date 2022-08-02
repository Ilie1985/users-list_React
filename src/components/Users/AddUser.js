import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    setEnteredUserName("");
    setEnteredAge("");
    console.log(enteredUserName, enteredAge);
  };

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          min="1"
          max="100"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button className={styles.button} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
