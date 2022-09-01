const path = require("path");

//to get dirname
console.log(
  path.dirname("D:/Web development/Front-end/NodeJs/Practice/path_module.js")
);

//to get extension name
console.log(
  path.extname("D:/Web development/Front-end/NodeJs/Practice/path_module.js")
);

//to get file name
console.log(
  path.basename("D:/Web development/Front-end/NodeJs/Practice/path_module.js")
);

//to get all data
console.log(
  path.parse("D:/Web development/Front-end/NodeJs/Practice/path_module.js")
);
