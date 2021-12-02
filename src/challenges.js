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
  return resultado;
  
 
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
//Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function catAndMouse(mouse, cat1, cat2) {
  var PosicaoDoGato1 = Math.abs(cat1 - mouse)
  var PosicaoDoGato2 = Math.abs(cat2 - mouse)
  var returno;
    if (PosicaoDoGato1 < PosicaoDoGato2){
      returno = "cat1";
    } else if (PosicaoDoGato2 < PosicaoDoGato1){
      returno = "cat2"
    } else {
      returno = "os gatos trombam e o rato foge"
    }
 return returno
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
