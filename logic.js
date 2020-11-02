let apd;
let word;
let stack;
let currentState;

//Método para remover os simbolos na pilha na ordem correta
const popStack = (inout) => {
  if (inout !== "#") stack.pop();
};

//Método para inserir os simbolos na pilha na ordem correta
const pushStack = (input) => {
  if (input.length > 1) {
    for (let i = input.length - 1; i >= 0; i--) {
      stack.push(input[i]);
    }
  } else if (input !== "#") {
    stack.push(input);
  }
};

//Função que retorna o 'caminho' de um estado atual para um estado futuro através do valor da transição
const handlePath = (input) => {
  for (const partialFunction of apd.partialFunctions) {
    if (
      partialFunction.currentState === currentState &&
      partialFunction.entry === "#" &&
      partialFunction.stackOut === stack[stack.length - 1]
    ) {
      return partialFunction;
    }

    if (
      partialFunction.currentState === currentState &&
      partialFunction.entry === input &&
      (partialFunction.stackOut === "#" ||
        partialFunction.stackOut === stack[stack.length - 1])
    ) {
      return partialFunction;
    }

    if (
      partialFunction.currentState === currentState &&
      partialFunction.entry === "#" &&
      partialFunction.stackOut === "#"
    ) {
      return partialFunction;
    }
  }
};

// Função que executa toda a logica do APD
const run = (apdInput, wordInput) => {
  let invalidWord = false;
  apd = apdInput;
  word = wordInput;
  stack = [];
  currentState = apd.initialState;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "#") {
      continue;
    }

    if (!apd.alphabet.includes(word[i])) {
      invalidWord = true;
      break;
    }
    const transition = handlePath(word[i]);

    if (!transition) {
      invalidWord = true;
      break;
    }

    popStack(transition.stackOut);
    pushStack(transition.stackIn);
    currentState = transition.destinyState;
    if (transition.entry === "#") {
      i = i - 1;
    }
  }

  while (stack.length > 0) {
    const transition = handlePath("#");
    if (!transition) {
      invalidWord = true;
      break;
    }

    currentState = transition.destinyState;
    popStack(transition.stackOut);
    pushStack(transition.stackIn);
  }

  if (
    !invalidWord &&
    stack[0] === undefined &&
    apd.finalStates.includes(currentState)
  ) {
    console.log("Sim");
  } else {
    console.log("Não");
  }
};

module.exports = {
  run,
};
