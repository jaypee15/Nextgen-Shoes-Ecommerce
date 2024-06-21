// load dependencies
const express = require("express");

const app = express();

app.use(express.json());

app.use("*", (req, res, next) => {
  console.log(`route ${req.baseUrl} not found`);

  res.status(404).json({ message: "not found" });
});


module.exports = app;
