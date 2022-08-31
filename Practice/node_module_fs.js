const fs = require("fs");

//create a new file and write data
fs.writeFileSync("read.txt", "It's my start of nodeJs");

//append data in a file
fs.appendFileSync("read.txt", "\nIts going good");

//read data from a file
let data = fs.readFileSync("read.txt");
data = data.toString();
console.log(data);
//to rename file
fs.renameSync("read.txt", "readWrite.txt");
