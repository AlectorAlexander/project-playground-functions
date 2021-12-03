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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
