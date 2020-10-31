let apd;
let word;
let stack;
let currentState;
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve
// salve salve salve

// exit with ctrl + D

// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);

// process.stdin.on("keypress", (str, key) => {
//   console.log(key);
//   if (key && key.sequence === "\u0004") process.exit();
// });

const handleInput = (input) => {
  let letter = input;
};

//Método para inserir os simbolos na pilha na ordem correta
const inputStack = (input) => {
  console.log(input);
  if (input.length > 1) {
    for (let i = input.length - 1; i >= 0; i--) {
      stack.push(input[i]);
    }
  } else {
    stack.push(input);
  }
};

//Função que retorna o 'caminho' de um estado atual para um estado futuro através do valor da trnasição
const handlePath = (input) => {
  for (const partialFunction of apd.partialFunctions) {
    if (
      partialFunction.currentState == currentState &&
      partialFunction.entry == input
    ) {
      inputStack(partialFunction.stackIn); //Apenas teste do push
      return partialFunction;
    }
  }
};

// Função que executa toda a logica do APD
const run = (apdInput, wordInput) => {
  apd = apdInput;
  word = wordInput;
  stack = [];
  currentState = apd.initialState;

  for (let i = 0; i < word.length; i++) {
    //handleInput(word[i]);
    handlePath(word[i]);
  }

  console.log(stack);
};

module.exports = {
  run,
};
