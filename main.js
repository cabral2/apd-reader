const fs = require("fs");
var logic = require("./logic.js");

const readFile = (path) => {
  const fileData = fs.readFileSync(path, "utf8");
  return JSON.parse(fileData);
};

const parsedFileData = readFile("./exemplo.json");
const ap = parsedFileData.ap;

const word = "0101";

const apd = {
  states: ap[0],
  entries: ap[1],
  stackEntries: ap[2],
  partialFunctions: ap[3],
  initialState: ap[4],
  finalStates: ap[5],
};

apd.partialFunctions = apd.partialFunctions.map((y) => {
  return {
    currentState: y[0],
    entry: y[1],
    stackOut: y[2],
    destiny: y[3],
    stackIn: y[4],
  };
});

logic.run(apd, word);
