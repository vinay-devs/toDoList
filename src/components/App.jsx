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
  return (
    <div>
      <Header />
      <Createarea getData={getData} />
      <h3>Todo</h3>
      {items.map((item, index) => {
        return <Card key={index} title={item.title} content={item.content} />;
      })}
    </div>
  );
}

export default App;
