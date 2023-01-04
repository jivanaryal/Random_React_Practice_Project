import React, { createContext, useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const getRandom = () => {
  return Math.floor(Math.random() * 20000);
};

const data = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg",
    place: "heart of your country",
    prize: getRandom(),
    info: "hello my name is jivan aryal and i am from the world have you way championship and this place is so awesone there you can enjoy your vacation and other many thing",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg",
    place: "heart of your country",
    prize: getRandom(),
    info: "hello my name is jivan aryal and i am from the world have you way championship and this place is so awesone there you can enjoy your vacation and other many thing",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg",
    place: "heart of your country",
    prize: getRandom(),
    info: "hello my name is jivan aryal and i am from the world have you way championship and this place is so awesone there you can enjoy your vacation and other many thing",
  },
];

export const PersonContext = React.createContext();

const Tour = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState(data);
  useEffect(() => {
    setLoading(!loading);
  }, []);
  const removeItem = (id) => {
    const newItem = people.filter((props) => props.id !== id);
    setPeople(newItem);
  };
  if (loading) {
    return (
      <>
        <Loading />;
      </>
    );
  }
  if (people.length === 0) {
    return (
      <main>
        <h1>no tour left to display</h1>
        <button onClick={() => setPeople(data)}>referesh</button>
      </main>
    );
  }
  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <h1>Our Tour</h1>
      <Tours />
    </PersonContext.Provider>
  );
};

export default Tour;
