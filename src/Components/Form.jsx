import React from "react";
import { useState } from "react";
import "./hide.css";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  const [people, setPeople] = useState([]);
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setPerson({ ...person, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (person.firstName && person.lastName && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople((people) => {
        return [...people, newPerson];
      });
      setPerson({ firstName: "", lastName: "", password: "" });
    } else {
      alert("apna kam kar bhosodike");
    }
  };
  return (
    <article>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={changeHandler}
        />
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={person.lastName}
          onChange={changeHandler}
        />
        <label htmlFor="firstName">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={person.password}
          onChange={changeHandler}
        />
        <input type="submit" value="submit" />
      </form>
      {people.map(({ id, firstName, lastName, password }) => {
        return (
          <div className="hide" key={id}>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
            <h3>{password}</h3>
            <nav></nav>
          </div>
        );
      })}
    </article>
  );
};

export default Form;
