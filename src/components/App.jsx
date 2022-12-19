import React, { useEffect, useState } from "react";
import Header from "./Header";
import Createarea from "./Createarea";
// import { Card } from "react-bootstrap";
import Card from "./Card";

function App() {
  const [items, setItems] = useState([]);
  // function getData(note) {
  //   setItems((prev) => {
  //     return [...prev, note];
  //   });
  // }
  function deleteItem(id) {
    // return setItems((prev) => {
    //   return items.filter((item, index) => {
    //     return index !== id;
    //   });
    // });
    fetch(`http://localhost:4000/task/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => getTasks());
  }
  // console.log(items);
  function getTasks() {
    fetch("http://localhost:4000/task")
      .then((res) => res.json())
      .then((data) => {
        // console.log([data]);
        setItems(data);
      });
  }
  // console.log(items[0]);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Header />
      <Createarea
        onAdd={() => {
          console.log("added");
          getTasks();
        }}
      />
      <h3>Todo</h3>
      {items.map((item, index) => {
        return (
          <Card
            key={index}
            id={item._id}
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
