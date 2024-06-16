var express = require("express");
var router = express.Router();
var Test = require("../models/testModel");

router.get("/", async function (req, res, next) {
  let tests = await Test.find();
  res.json({
    state: "success",
    data: tests,
  });
  res.end();
});

router.post("/", async function (req, res, next) {
  const test = req.body;
  Test.create(test).then(() => {
    res.json({
      state: "success",
      data: test,
    });
    res.end();
  });
});

router.patch("/", async function (req, res, next) {
  const test = req.body;
  Test.findOneAndUpdate({ name: test.name }, test).then(() => {
    res.json({
      state: "success",
      data: test,
    });
    res.end();
  });
});

module.exports = router;
