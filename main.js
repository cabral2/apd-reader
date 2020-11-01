const fs = require("fs");
var logic = require("./logic.js");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const readFile = (path) => {
  const fileData = fs.readFileSync(path, "utf8");
  return JSON.parse(fileData);
};
if(!(process && process.argv && process.argv[2])){
  console.log("Use: node main.js [nome-do-arquivo]")
  process.exit();
}
  
const parsedFileData = readFile(process.argv[2]);
const ap = parsedFileData.ap;

const apd = {
  states: ap[0],
  alphabet: ap[1],
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
    destinyState: y[3],
    stackIn: y[4],
  };
});

const getUserInput = (word) => {
  logic.run(apd, word);

  rl.question('', getUserInput)
};

rl.question('', getUserInput);
