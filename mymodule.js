const fs = require("fs");
const maker = (dir, filter, callback) =>
  fs.readdir(dir, (err, data) => {
    if (err) {
      return callback(err);
    }
    const res = data.filter((item) => {
      return item.split(".")[1] == filter;
    });
    callback(null, res);
  });

module.exports = maker;

// function maker(dir, filter, callback) {
//   fs.readdir(dir, (err, data) => {
//     if (err) {
//       return callback(err);
//     }
//     const res = data.filter((item) => {
//       return item.split(".")[1] == filter;
//     });
//     callback(null, res);
//   });
// }
