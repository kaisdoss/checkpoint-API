import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);
  const [newUser, setNewUser] = useState("");


 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setListOfUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(listOfUser);

  return (
    <div className="container">
        <h2>List Of Users</h2>
      <ul id="users">
        {listOfUser.map((user, key) => (
          <li id='user' key={key}> {user.name} </li>
        ))}
      </ul>
      
    </div>
  );
}

export default UserList;
