const fs = require("fs");

const readFile = (path) => {
  const fileData = fs.readFileSync(path, "utf8");
  return JSON.parse(fileData);
};

const parsedFileData = readFile("./exemplo.json");
const ap = parsedFileData.ap;

const apd = {
  states: ap[0],
  entries: ap[1],
  stack: ap[2],
  partialFunctions: ap[3],
  initialState: ap[4],
  finalStates: ap[5],
};

console.log(apd);
