const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("MiniProject.html");
const about = fs.readFileSync("./about.html");
const food = fs.readFileSync("./food.html");
const index = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url == "/") {
    res.end(home);
  } else if (url == "/About.html") {
    res.end(about);
  } else if (url == "/Food.html") {
    res.end(food);
  } else if (url == "/index.html") {
    res.end(index);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
