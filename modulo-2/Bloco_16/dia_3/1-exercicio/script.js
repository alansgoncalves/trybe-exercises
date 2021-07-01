

const itemPrimario = [1, 2, 3, 4, 5];
const clonagemTeste = itemPrimario;
clonagemTeste.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemPrimario); // [1, 2, 3, 4, 5]

const clonagemTeste = [1, 2, 3, 4, 5];
clonagemTeste.concat(6);
clonagemTeste.push(6)
console.log(clonagemTeste)