import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "ktm",
  },
  {
    id: 2,
    name: "btn",
  },
  {
    id: 3,
    name: "npg",
  },
];
const SearchKey = () => {
  const [city, setCity] = useState(data);

  return (
    <div>
      <input type="text" placeholder="enter your city name" />
      {city.map((props) => {
        console.log(props);
      })}
    </div>
  );
};

export default SearchKey;
