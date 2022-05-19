import { useState, useRef, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredErrorText, setErrorText] = useState(null);
  const enteredRefName = useRef();
  const enteredRefAge = useRef();

  const errorViewHandler = () => {
    setErrorText(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const refName = enteredRefName.current.value;
    const refAge = enteredRefAge.current.value;

    if (refName.trim().length === 0 || refAge.trim().length === 0) {
      setErrorText({
        title: "Invalid value!",
        message: "Please make sure you have entered all of the values",
      });
      return;
    }
    if (+refAge < 1) {
      //+ convert age to number -> super safe
      setErrorText({
        title: "Invalid age!",
        message: "Please make sure the age is above 1",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: refName,
      age: refAge,
    };
    props.onAddUser(newUser);

    enteredRefName.current.value = "";
    enteredRefAge.current.value = "";
  };

  return (
    <Fragment>
      {enteredErrorText && (
        <ErrorModal
          onErrorView={errorViewHandler}
          errorText={enteredErrorText}
        />
      )}
      <Card classes={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          {/* 'ref' attribute is so the respective useRef can read the respective input field */}
          <input id="username" type="text" ref={enteredRefName}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredRefAge}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
