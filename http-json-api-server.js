const http = require("http");
const url = require("url");

const parseTime = (date) => ({
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
});

const getUnixTime = (date) => ({
  unixtime: date.getTime(),
});

const server = http.createServer(function (req, res) {
  const { pathname, query } = url.parse(req.url, true);
  const date = new Date(query.iso);
  let result;
  if (req.method === "GET" && pathname == "/api/parsetime") {
    result = parseTime(date);
  } else if (req.method === "GET" && pathname == "/api/unixtime") {
    result = getUnixTime(date);
  } else {
    res.writeHead(404);
    res.end();
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(result));
});

server.listen(Number(process.argv[2]));
