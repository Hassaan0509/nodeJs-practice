const fs = require("fs");

//write in a file
fs.writeFile("readAsync.txt", "This is a async function", (err) => {
  if (!err) {
    console.log("File created");
  }
});

//append a file
fs.appendFile("readAsync.txt", " Appended", (err) => {
  if (!err) {
    console.log("File appended");
  }
});

//read data from file
fs.readFile("readAsync.txt", "UTF-8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});
