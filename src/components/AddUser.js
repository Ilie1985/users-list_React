import React from "react";
import Card from "./UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className ={styles.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" min="1" max="100" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
