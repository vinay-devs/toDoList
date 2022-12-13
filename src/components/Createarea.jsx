import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Createarea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function addData(event) {
    if (note.title != "" && note.content != "") {
      props.getData(note);
      fetch("http://localhost:4000/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: note }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      //event.preventDefault();
    }
  }
  function takeValue(event) {
    const { name, value } = event.target;
    return setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <form>
      <input
        onChange={takeValue}
        type="text"
        name="title"
        placeholder="title"
      ></input>
      <textarea
        onChange={takeValue}
        type="text"
        name="content"
        placeholder="content"
        rows="3"
      ></textarea>
      <button onClick={addData}>
        <AddIcon />
      </button>
    </form>
  );
}

export default Createarea;
