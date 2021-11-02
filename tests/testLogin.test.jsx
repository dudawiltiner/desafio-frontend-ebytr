import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/login';
import '@testing-library/jest-dom';

describe('Quando acessada a tela de Login deve aparecer', () => {
  it('Um formulário com data-testid: "form-login"', () => {
    render(<Login />);
    const formElement = screen.getByTestId('form-login');
    expect(formElement).toBeInTheDocument();
  });

  it('Deve aparecer o títula do formulário: "Entrar para usar a plataforma"', () => {
    render(<Login />);
    const title = screen.getByText(/Entrar para usar a plataforma/i);
    expect(title).toBeInTheDocument();
  });

  it('Deve aparecer a pergunta "Qual o seu email?"', () => {
    render(<Login />);
    const questioEmail = screen.getByText(/Qual o seu email?/i);
    expect(questioEmail).toBeInTheDocument();
  });

  it('Deve aparecer a pergunta "Digite a sua senha?"', () => {
    render(<Login />);
    const questioPassword = screen.getByText(/Digite a sua senha?/i);
    expect(questioPassword).toBeInTheDocument();
  });

  it('Um botão "Entrar" para submeter o formulário de autenticação deve aparecer', () => {
    render(<Login />);
    const buttonSubmit = screen.getByRole('button', { name: /Entrar/i });
    expect(buttonSubmit).toBeInTheDocument();
  });
});
