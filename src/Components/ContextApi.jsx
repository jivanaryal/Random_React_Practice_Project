import React from "react";
import { useContext } from "react";
import { useState } from "react";
const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg",
    title: "jivan the don",
    author: "bikash puri",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg",
    title: "jivan the don",
    author: "bikash puri",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg",
    title: "jivan the don",
    author: "bikash puri",
  },
];

const BookContext = React.createContext();

const ContextApi = () => {
  const [book, setBook] = useState(data);

  const removeItem = (id) => {
    const newItem = book.filter((props) => props.id !== id);
    setBook(newItem);
  };
  return (
    <BookContext.Provider value={{ removeItem, book }}>
      <h1>our product</h1>
      <Books />
    </BookContext.Provider>
  );
};
const Books = () => {
  const book = useContext(BookContext);
  return (
    <div>
      {book.book.map((props) => {
        return <Book key={props.id} {...props} />;
      })}
    </div>
  );
};
const Book = ({ id, img, title, author }) => {
  const { removeItem } = useContext(BookContext);
  return (
    <div>
      <img src={img} alt="" />
      <p>{title}</p>
      <b>{author}</b>
      <button onClick={() => removeItem(id)}>Remove item</button>
    </div>
  );
};

export default ContextApi;
