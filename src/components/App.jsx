import React, { useState } from "react";
import Header from "./Header";
import Createarea from "./Createarea";
// import { Card } from "react-bootstrap";
import Card from "./Card";

function App() {
  const [items, setItems] = useState([]);
  function getData(note) {
    setItems((prev) => {
      return [...prev, note];
    });
  }
  function deleteItem(id) {
    return setItems((prev) => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }
  console.log(items);

  fetch("http://localhost:4000/task")
    .then((res) => res.json())
    .then((data) => {
      console.log("done");
    });
  return (
    <div>
      <Header />
      <Createarea getData={getData} />
      <h3>Todo</h3>
      {items.map((item, index) => {
        return (
          <Card
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}

export default App;
