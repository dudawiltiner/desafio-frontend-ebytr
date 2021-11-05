import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/navBar';

describe('Quando renderizado o componete NavBar na tela Home', () => {
  it('O nome do usuário autenticado deve aparecer como um botão', () => {
    render(<NavBar showName name="Nome de uma pessoa" />);
    const buttonElement = screen.getByRole('button', { name: 'Nome de uma pessoa' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('E se esse botão for clicado, deve aparecer um outro de Logout', () => {
    render(<NavBar showName name="Nome de uma pessoa" />);
    const buttonElement = screen.getByRole('button', { name: 'Nome de uma pessoa' });
    expect(buttonElement).toBeInTheDocument();

    userEvent.click(nameElement);

    const logoutElement = screen.getByRole('button', { name: 'Sair' });
    expect(logoutElement).toBeInTheDocument();
  });
});

describe('Quando renderizado o componete NavBar na tela de Login', () => {
  it('O nome do usuário não deve aparecer', () => {
    render(<NavBar showName={ false } name="Nome de uma pessoa" />);
    const nameElement = screen.queryByText(/Nome de uma pessoa/i);
    expect(nameElement).toBeNull();
  });
});
