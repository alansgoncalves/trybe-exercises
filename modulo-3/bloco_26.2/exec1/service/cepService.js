const cepModel = require('../models/cepsModel');

const CEP_REGEX = /\d{5}-\d{3}/;

const findAddressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna uma erro
  const cep = await cepModel.findAddressByCep(searchedCep);
  console.log('teste', cep)

  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

// Caso não econtre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
        },
      };
    } 
  return cep;
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrat
  const existingCep = await cepModel.findAddressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return cepModel.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  create
};
