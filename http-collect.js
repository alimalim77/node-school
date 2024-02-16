const http = require("http");
url = process.argv[2];

http.get(url, (res) => {
  let dat = "";
  res.on("data", (chunk) => {
    dat += chunk;
  });

  res.on("end", () => {
    console.log(dat.length);
    console.log(dat);
  });
});
