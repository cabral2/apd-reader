let apd;
let word;
let stack;
let currentState;

const handleInput = (input) => {
  let letter = input;
};

//Método para inserir os simbolos na pilha na ordem correta
const inputStack = (input) => {
  if(input.length>1){
    for(let i = input.length - 1; i>=0; i--){
      stack.push(input[i]);
    }
  }
}

//Função que retorna o 'caminho' de um estado atual para um estado futuro através do valor da trnasição
const handlePath = (input) =>{
  for(let i = 0; i< apd.partialFunctions.length; i++){
    if(apd.partialFunctions[i].currentState == currentState && apd.partialFunctions[i].entry == input ){      
      inputStack(apd.partialFunctions[i].stackIn);   //Apenas teste do push
      return apd.partialFunctions[i];
    }
  }
}

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
