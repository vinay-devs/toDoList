const mongoose = require("mongoose");

const ListItemsSchema = mongoose.Schema(
  // id: { type: Number },

  {
    title: String,
    content: String,
  }
);

const List = mongoose.model("List", ListItemsSchema);

module.exports = List;
