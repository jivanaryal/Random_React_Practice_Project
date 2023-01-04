import React, { useState } from "react";
import { data } from "./Data";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const AllContainer = () => {
  const [index, setIndex] = useState(0);
  const { id, img, name, job, intro } = data[index];
  const increaseItem = () => {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const decreaseItem = () => {
    if (index <= 0) {
      setIndex(4);
    } else {
      setIndex(index - 1);
    }
  };
  const supriseYou = () => {
    const number = getRandom();
    setIndex(number);
  };
  const getRandom = () => {
    const newItem = Math.floor(Math.random() * (data.length - 1));
    return newItem;
  };
  return (
    <div key={id}>
      <div className="photo">
        <img src={img} alt={name} />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="job">
        <p>{job}</p>
      </div>
      <div className="intro">
        <p>{intro}</p>
      </div>
      <div className="arrow">
        <button className="leftarrow" onClick={() => decreaseItem()}>
          <VscArrowLeft />
        </button>
        <button className="rightarrow" onClick={() => increaseItem()}>
          <VscArrowRight />
        </button>
      </div>
      <div className="btn">
        <button onClick={() => supriseYou()}>suprise me</button>
      </div>
    </div>
  );
};

export default AllContainer;
