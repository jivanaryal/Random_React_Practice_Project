import React, { useState } from "react";

const SearchBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const saveSubmit = () => {
    console.log({ name, email, mobile });
    let data = { name, email, mobile };

    fetch("https://google.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }).then((result) => {
      result.JSON().then((res) => {
        console.log(res).catch((Error) => {
          console.log("error");
        });
      });
    });
  };
  return (
    <>
      Enter your first Name
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Enter your number
      <input
        type="text"
        name="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      Enter your mobile number
      <input
        type="text"
        name="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="button" onClick={saveSubmit}>
        Save value
      </button>
    </>
  );
};

export default SearchBox;
