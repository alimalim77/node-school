const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static(process.argv[3] || path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(require("stylus").middleware("public"));
app.listen(Number(process.argv[2]));
