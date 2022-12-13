const express = require("express");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const cors = require("cors");
const app = express();
const port = 4000;
const List = require("./database");
const task = require("./routes/task");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/task", task);

mongoose
  .connect("mongodb://localhost:27017/todo", { autoIndex: false })
  .then(() => {
    autoIncrement.initialize(mongoose.connection);
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server is listenenig port");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
List.updateOne(
  {
    id: 1,
  },
  { $push: { item: { title: "a", content: "b" } } }
);
