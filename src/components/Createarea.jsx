import React from "react";
import AddIcon from "@mui/icons-material/Add";

function Createarea() {
  return (
    <form>
      <input type="text" name="Title" placeholder="title"></input>
      <textarea
        type="text"
        name="Title"
        placeholder="content"
        rows="3"
      ></textarea>
      <button>
        <AddIcon />
      </button>
    </form>
  );
}

export default Createarea;
