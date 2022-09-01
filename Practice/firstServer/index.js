const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("Hello from other sides");
});

server.listen(80, "127.0.0.1", () => {
  console.log("listening on port number 80");
});
