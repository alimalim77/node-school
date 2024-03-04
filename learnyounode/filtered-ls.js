const fs = require("fs");

fs.readdir(process.argv[2], (err, data) => {
  if (err) {
    throw err;
  }
  const res = data.filter((item) => {
    return item.split(".")[1] == "md";
  });
  res.forEach((item) => console.log(item));
});
