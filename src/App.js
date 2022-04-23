import { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [enteredUsers, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <Fragment>
      {console.log(enteredUsers)}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={enteredUsers} />
    </Fragment>
  );
}

export default App;
