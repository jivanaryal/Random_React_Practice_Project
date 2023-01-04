import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [pageActive, setPageActive] = useState("home");
  return (
    <div className="bg-black">
      <div className="w-9/12 mx-auto flex justify-between py-4  text-white">
        <Link to="/">
          {" "}
          <div
            className={`text-red-500 ${
              pageActive === "home" ? "border-b-2" : "border-none"
            }`}
            onClick={() => setPageActive("home")}>
            Home
          </div>
        </Link>
        <Link to="/about">
          {" "}
          <div
            className={`text-red-500 ${
              pageActive === "about" ? "border-b-2" : "border-none"
            }`}
            onClick={() => setPageActive("about")}>
            About
          </div>
        </Link>
        <Link>
          {" "}
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
