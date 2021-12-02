// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // ESSE
}

// Desafio 4
function concatName() {
  // ESSE
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosEmpates= ties;
  let pontosGanhos = 0;
  if(wins > 1){
    pontosGanhos = wins * 3;
  }
  resultado = pontosEmpates + pontosGanhos;
  return resultado
  
 
}console.log(footballPoints(14, 8))

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // ESSESSESSE
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
