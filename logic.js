const readline = require("readline");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
  console.log(key);
  if (key && key.sequence === "\u0004") process.exit();
});

let apd;
let word;
let stack;
let currentState;

const handleInput = (input) => {};

const run = (apdInput, wordInput) => {
  apd = apdInput;
  word = wordInput;
  stack = [];
  currentState = apd.initialState;

  for (let i = 0; i < word.length; i++) {
    handleInput(word[i]);
  }
};

module.exports = {
  run,
};
