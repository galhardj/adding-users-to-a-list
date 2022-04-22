import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredErrorText, setErrorText] = useState(null);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const errorViewHandler = () => {
    setErrorText(null);
  };

  const updateNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const updateAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorText({
        title: "Invalid value!",
        message: "Please make sure you have entered all of the values",
      });
      return;
    }
    if (+enteredAge < 1) {
      //+ convert age to number -> super safe
      setErrorText({
        title: "Invalid age!",
        message: "Please make sure the age is above 1",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(newUser);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      {enteredErrorText && (
        <ErrorModal
          onErrorView={errorViewHandler}
          errorText={enteredErrorText}
        />
      )}
      <Card classes={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={updateNameHandler}
            value={enteredName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={updateAgeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
