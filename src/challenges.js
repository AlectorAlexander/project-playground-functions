// Desafio 1
function compareTrue(sim, ounao) {
  if(sim == true && ounao == true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
 var returno = base * height / 2;
 return returno;
}

// Desafio 3
function splitSentence(string) {

  return string.split(" ")
}

// Desafio 4
function concatName(array) {
 var returno = array[array.length - 1] + ", " + array[0]
 return returno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosEmpates= ties;
  let pontosGanhos = 0;
  if(wins >= 1){
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
function encode(string) {
  for (let index = 0; index < string.length; index++) {
    
 
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
} 
    
return string
} 

function decode(string) {
  for (let index = 0; index < string.length; index++) {
  string = string.replace = string.replace(/1/g, "a")
  string = string.replace = string.replace(/2/g, "e")
  string = string.replace = string.replace(/3/g, "i")
  string = string.replace = string.replace(/4/g, "o")
  string = string.replace = string.replace(/5/g, "u")
} 
    
return string
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
