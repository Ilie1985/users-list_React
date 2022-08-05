import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age( > 0 )",
      });
      return;
    }

    setEnteredUserName("");
    setEnteredAge("");
    // console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge);
  };

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler }
        />
      ) : (
        ""
      )}

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
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button className={styles.button} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
