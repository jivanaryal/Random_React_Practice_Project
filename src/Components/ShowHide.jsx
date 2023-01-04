import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>show/hide</button>

      {show && <Jivan />}
    </div>
  );
};
const Jivan = () => {
  const [size, setSize] = useState(window.innerWidth);

  const cleanup = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", cleanup);
    return () => {
      window.removeEventListener("resize", cleanup);
    };
  });

  return (
    <div>
      <h1>Windows Width</h1>
      <p>size: {size}</p>
    </div>
  );
};

export default ShowHide;
