import React from "react";

function Card(props) {
  return (
    <div className="note">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button>Delete</button>
    </div>
  );
}

export default Card;
