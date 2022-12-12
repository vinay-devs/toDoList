const mongoose = require("mongoose");

const ListItemsSchema = mongoose.Schema({
  id: { type: Number },
  item: [
    {
      title: { type: String },
      content: { type: String },
    },
  ],
});

const List = mongoose.model("List", ListItemsSchema);

module.exports = List;
