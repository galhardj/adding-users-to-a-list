import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const updateNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const updateAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredAge)
  };

  return (
    <Card classes={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={updateNameHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={updateAgeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
