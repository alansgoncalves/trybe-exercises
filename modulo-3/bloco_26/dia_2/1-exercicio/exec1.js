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



getNumber(4, 5, 'e')
  .then((result) => console.log("O resultado é:", result))
  .catch((error) => console.log("erro: %s", error.message))

  getNumber(4, 5, 8)
  .then((result) => console.log("O resultado é:", result))
  .catch((error) => console.log("erro: %s", error.message))

  getNumber(1, 1, 1)
  .then((result) => console.log("O resultado é:", result))
  .catch((error) => console.log("erro: %s", error.message))
