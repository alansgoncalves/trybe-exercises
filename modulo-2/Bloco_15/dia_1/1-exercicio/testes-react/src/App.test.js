import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica se há um campo input de email na tela', () => {
    // Acessar os elementos da tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');

    // Fazer o teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica se há dois botões', () => {
    // Acessar os elementos da tela
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
    
    // Fazer o teste
    expect(button.length).toBe(2);
  });

  it('Verifica se há um botão \'Enviar\'', () => {
    // Acessar os elementos da tela
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
    
    // Fazer o teste
    expect(button).toBeInTheDocument()
    expect(button).toHaveValue("Enviar")
  });

  it('Verifica se, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    // Acessar os elementos da tela
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email')
    const sendButton = getByTestId('id-send')
    const userEmail = getByTestId('id-email-user')

    // Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: { value: 'vekio.soft@gmail.com'}})
    fireEvent.click(sendButton)

    // Fazer os testes
    expect(emailInput.value).toBe('')
    expect(userEmail.textContent).toBe('Valor: vekio.soft@gmail.com')
  })

})
