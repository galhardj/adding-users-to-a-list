import { useState } from "react";
import React from "react";
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
    <div>
      {console.log(enteredUsers)}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={enteredUsers} />
    </div>
  );
}

export default App;
