function getNumber(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' )
      reject(new Error("Informe apenas números"));

      const resultado = (num1 + num2) * num3;

      if (resultado < 50)
      return reject (new Error('Valor muito baixo'));

      resolve(resultado)
    })
    return promise;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const randomNumbers = Array.from({ length: 3 }, getRandomNumber)

console.log(randomNumbers)

getNumber(...randomNumbers)
  .then((resolve) => console.log("O resultado é:", resolve))
  .catch((error) => console.log(error.message));


