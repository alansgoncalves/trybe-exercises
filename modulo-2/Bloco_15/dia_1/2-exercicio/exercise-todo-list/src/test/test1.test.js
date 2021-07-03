import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  it('Verifica qtd. de botões, se é tipo \'button\' e se contém o texto "Adicionar"', () => {
    const { getByText, getAllByRole } = render(<App />);
    const button = getByText(/adicionar/i);
    const buttons = getAllByRole('button');
    expect(button.type).toBe('button');
    expect(buttons.length).toBe(1)
    expect(button).toBeInTheDocument()
  })

  it('Teste se a tarefa que o usuário digitou, é adicionado a lista', () => {
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText(/tarefa/i);
    const addButton = queryByText(/adicionar/i);
    const TASK_VALUE = 'Javascript';

    fireEvent.change(inputTask, { target: { value: TASK_VALUE } });
    fireEvent.click(addButton)

    expect(queryByText(TASK_VALUE)).toBeInTheDocument();
  })
})