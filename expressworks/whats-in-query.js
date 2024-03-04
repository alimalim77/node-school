const express = require("express");
const app = express();

app.get("/search", function (req, res) {
  const search = req.query;
  res.send(search);
});

app.listen(Number(process.argv[2]));
