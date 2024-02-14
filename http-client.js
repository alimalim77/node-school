const fs = require("fs");
const http = require("http");

const data = process.argv[2];
http
  .get(data, (res) => {
    res.setEncoding("utf8");
    res.on("data", (data) => {
      process.stdout.write(`${data}\n`);
    });
    res.on("error", (err) => {
      process.stdout.write(`${err}\n`);
    });
  })
  .on("error", (e) => {
    console.error(e.message);
  });
