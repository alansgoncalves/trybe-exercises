const { expect } = require('chai');
const { numNatural } = require('../tests/numNatural')


describe('Chama a função "numNatural"', () => {
  describe('Quando o número for maior que 0', () => {
    describe('resposta', () => {
      it('é uma string', () => {
        const result = numNatural(6);
        expect(result).to.be.a('string')
      })
      it('é igual a positivo', () => {
        const result = numNatural(6);
        expect(result).to.be.equals('positivo')
      })
    })
  })

  describe('Quando o número for menor que 0', () => {
    describe('resposta', () => {
      it('é uma string', () => {
        const result = numNatural(-3);
        expect(result).to.be.a('string')
      })
      it('é igual a negativo', () => {
        const result = numNatural(-3);
        expect(result).to.be.equals('negativo')
      })
    })
  })

  describe('Quando o número for igual a 0', () => {
    describe('resposta', () => {
      it('é uma string', () => {
        const result = numNatural(0);
        expect(result).to.be.a('string')
      })
      it('é igual a neutro', () => {
        const result = numNatural(0);
        expect(result).to.be.equals('neutro')
      })
    })
  })
  
})