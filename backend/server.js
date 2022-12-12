const express = require("express");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const cors = require("cors");
const app = express();
const port = 4000;
const List = require("./database");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.get("/", (req, res) => {
  const obj1 = {
    id: 20,
    item: {
      title: "Hello",
      content: "HOw r u",
    },
  };
  List.create(obj1, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send("OP");
    }
  });
  console.log(listAdded);
  // List.findById("638eca788b5ee0df7c05e1cd", function (err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(data);
  //   }
  // });
  // const data = { message: "hello" };
  // res.send(data);
});

app.post("/hello", (req, res) => {
  const { a } = req.body;
  console.log(a);

  List.create(
    {
      id: 4,
      item: { a },
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
  res.sendStatus(200);
});
