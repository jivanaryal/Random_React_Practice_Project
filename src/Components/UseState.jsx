import React from "react";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseState = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((props) => {
        const { id, login, avatar_url } = props;
        console.log(login);
        return (
          <div key={id}>
            <h2>{login}</h2>
            <img src={avatar_url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default UseState;
