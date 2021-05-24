// Array.map

//EXEMPLO 1:

const numbers = [1, 2, 3, 4];
console.log(numbers);

const map = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const mappedItem = callback(array[index]);
    newArray.push(mappedItem);
  }
  return newArray;
}

console.log(map(numbers, (number) => number * 2));
console.log(numbers);



//EXEMPLO 2:

// const mappedNumbers = numbers.map((value, index, array) => {
  // Espera-se que retorne algo
// });

// console.log(mappedNumbers);


// Utilizando forEach

// const newArray = [];
// numbers.forEach((value) => newArray.push(value * 3));
// console.log(newArray);

// const newArray = numbers.map(value => value * 3);
// console.log(newArray);

//---------------------------------------------------------//




const states = [
  { short: "AM", name: "Amazonas" },
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const regions = [
  { short: "N", name: "Norte" },
  { short: "NE", name: "Nordeste" },
  { short: "CW", name: "Centroeste" },
  { short: "SE", name: "Sudeste" },
  { short: "S", name: "Sul" },
];

const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// a) Transforme o array de objetos cities em um array de strings com o seguinte formato:
// Ex: "${nomeDaCidade} - ${siglaDoEstado}"
console.log("Formato: ${nomeDaCidade} - ${siglaDoEstado}");


const citiesAndStateCodes = cities.map((city) => {
  return `${city.name} - ${city.state}`;
});

console.log(citiesAndStateCodes);



//---------------------------------------------------------//




// b) "A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}"
console.log("Formato: A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}");

const citiesAndStateNames = cities.map((city) => {
  const state = states.find((state) => state.short === city.state);
  return `A cidade de ${city.name} fica no estado de ${state.name}`;
});

console.log(citiesAndStateNames);


//---------------------------------------------------------//


// 2. Transforme o array de objeto cities em um array de objetos no seguinte formato:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }

const arrayCities = cities.map((city) => {
  const state = states.find((state) => state.short === city.state);
  const region = regions.find((region) => region.short === city.region);

  return {
    state: state.name,
    city: city.name,
    region: region.name,
  };
});

console.log(arrayCities);