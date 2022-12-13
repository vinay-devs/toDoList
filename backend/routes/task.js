const express = require("express");
const router = express.Router();
const List = require("../database");

router.get("/", (req, res) => {
  List.findOne({ id: 1 }, function (err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(data.item);
    }
  });
});
router.post("/", async (req, res) => {
  const { a } = req.body;
  console.log(a);

  await List.updateOne(
    {
      id: 1,
    },
    { $push: { item: a } }
  );
});

router.delete("/");

module.exports = router;
