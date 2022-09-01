const fs = require("fs");
const obj = {
  name: "Hassaan",
  age: "20",
  profession: "Web developer",
};

const JSONData = JSON.stringify(obj);

fs.writeFile("Json1.json", JSONData, () => {});

fs.readFile("Json1.json", "utf-8", (err, data) => {
  if (!err) {
    console.log(JSON.parse(data));
  }
});
