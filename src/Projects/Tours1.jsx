import React, { useContext, useState } from "react";
import { PersonContext } from "./Tour";

const Tours1 = ({ id, img, place, prize, info }) => {
  const [readMore, setReadMore] = useState(false);
  const { removeItem } = useContext(PersonContext);
  return (
    <article>
      <img src={img} alt={place} />
      <h1>{place}</h1>
      <h1>{prize}</h1>
      <p>
        {readMore ? info : `${info.substring(0, 100)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "show more"}
        </button>
      </p>
      <button onClick={() => removeItem(id)}>not interested </button>
    </article>
  );
};

export default Tours1;
