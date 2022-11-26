import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Createarea(props) {
  const [note, setNote] = useState({
    Title: "",
    content: "",
  });
  function addData(event) {
    props.getData(note);
    event.preventDefault();
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
        name="Title"
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
