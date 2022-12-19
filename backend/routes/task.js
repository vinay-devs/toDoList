const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const List = require("../database");

router.get("/", (req, res) => {
  List.find({}, function (err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  });
});
router.post("/", async (req, res) => {
  const { a } = req.body;
  console.log(a);

  await List.create(a).then(res.send({}));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  List.deleteOne({ _id: id }).then(res.send({}));
});

module.exports = router;
