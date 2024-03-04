const express = require("express");
const fs = require("fs");
const app = express();

app.get("/books", function (req, res) {
  const file = fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      res.sendStatus(404).send(err.message);
    }
    res.send(JSON.parse(data));
  });
});

app.listen(Number(process.argv[2]));
