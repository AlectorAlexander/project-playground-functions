// Desafio 10
function techList(tech, name) {
  
  let vazio = "Vazio!"
  if (tech.length >= 1) {
    var array = [];
     tech.sort()
    for (let i = 0; i < tech.length; i++) {
      const element = tech[i]
      
      array.push({
        tech: element,
        name: name, 
      });
    }array
  }else{
    var array = "Vazio!"
  }
 
 return array;

}

// Desafio 11
function generatePhoneNumber(numeros) {
  var resultado;
  var numeroDeVezes1 = 0;
  var numeroDeVezes2 = 0;
  var numeroDeVezes3 = 0;
  var numeroDeVezes4 = 0;
  var numeroDeVezes5 = 0;
  var numeroDeVezes6 = 0;
  var numeroDeVezes7 = 0;
  var numeroDeVezes8 = 0;
  var numeroDeVezes9 = 0;
  var numeroDeVezes0 = 0;
 
  for (let key = 0; key <= 11; key += 1) {
    if(numeros[key] === 1){
      numeroDeVezes1 += 1;
     } else if(numeros[key] === 2){
      numeroDeVezes2 += 1;
     } else if(numeros[key] === 3){
      numeroDeVezes3 += 1;
     } else if(numeros[key] === 4){
      numeroDeVezes4 += 1;
     } else if(numeros[key] === 5){
      numeroDeVezes5 += 1;
     } else if(numeros[key] === 6){
      numeroDeVezes6 += 1;
     } else if(numeros[key] === 7){
      numeroDeVezes7 += 1;
     } else if(numeros[key] === 8){
      numeroDeVezes8 += 1;
     } else if(numeros[key] === 9){
      numeroDeVezes9 += 1;
     }else if(numeros[key] === 0){
      numeroDeVezes0 += 1;
     }
      
    }
 
 if (numeroDeVezes1 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 } else if (numeroDeVezes2 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes3 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes4 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes5 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes6 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes7 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes8 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes9 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 }else if (numeroDeVezes0 >= 3){
  resultado = "não é possível gerar um número de telefone com esses valores"
 } else {
   resultado = "(" + numeros[0] + numeros[1] + ") " + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + "-" +  numeros[7] + numeros[8] + numeros[9] + numeros[10]
 }
 for (const num in numeros) {
  if (numeros[num] < 0 || numeros[num] > 9) {
    resultado = "não é possível gerar um número de telefone com esses valores"    
  } 
  
 }
 if (numeros.length != 11) {
  resultado = "Array com tamanho incorreto."
}
 return resultado;
} 

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  var resultado = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > lineB - lineC && lineB > lineA - lineC && lineC > lineB - lineA) {
    resultado = true;
  }
  return resultado
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
