const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const path = process.argv[3];
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/plain" });
  fs.createReadStream(path).pipe(res);
});

server.listen(Number(port));
