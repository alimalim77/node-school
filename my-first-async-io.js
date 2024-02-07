const fs = require("fs");
fs.readFile(process.argv[2], "utf8", (err, res) => {
  const data = res.split("\n").length - 1;
  console.log(data);
});
