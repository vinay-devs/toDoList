import React from "react";

function Card(props) {
  function deleteNote() {
    props.deleteItem(props.id);
  }
  return (
    <div className="note">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default Card;
