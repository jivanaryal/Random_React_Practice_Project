import React from "react";
import { useState } from "react";

const Practice = () => {
  const { count } = useState([20]);
  return (
    <div>
      <h1>{count}</h1>
      <p>hello</p>
    </div>
  );
};

export default Practice;
