import React from "react";
import { useState } from "react";
import { Signup } from "../Page/Signup";

const Login = () => {
  const [page, setPage] = useState("login");
  const handleSubmit = (e) => {
    e.preventDefault();
    <Signup />;
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">lastName</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="Address">Address</label>
        <input type="text" name="Address" id="Address" />
        <button onClick={handleSubmit}>signup</button>
      </form>
    </div>
  );
};

export default Login;
