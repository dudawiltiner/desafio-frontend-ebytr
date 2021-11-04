import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertLogin from '../components/alertLogin';

describe('Quando chmmado o componete AlertLogin', () => {
  it('Deve aparecer o título do problema de acordo com a propriedade title', () => {
    render(<AlertLogin show title="Usuário não autenticado" />);
    const textElement = screen.getByText('Usuário não autenticado');
    expect(textElement).toBeInTheDocument();
  });

  it('E a descrição do corrido de acordo com a propriedade description', () => {
    render(<AlertLogin show description="Senha ou email incorreto" />);
    const textElement = screen.getByText('Senha ou email incorreto');
    expect(textElement).toBeInTheDocument();
  });
});
