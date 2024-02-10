const maker = require("./mymodule.js");
const folder = process.argv[2];
const extension = process.argv[3];

maker(folder, extension, (err, list) => {
  if (err) return callback(err);
  list.forEach((file) => console.log(file));
});
