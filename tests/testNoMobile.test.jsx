import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoMobile from '../components/nomobile';

describe('Quando renderizado o componete NoMobile', () => {
  it('Deve aparecer um texto informando que não versão para celular', () => {
    render(<NoMobile />);
    const textElement = screen.getByText('Não há versão para celular');
    expect(textElement).toBeInTheDocument();
  });

  it('Deve aparecer um texto orientando o usuário a usar outro dispositivo', () => {
    render(<NoMobile />);
    const textElement = screen.getByText('Acesse num notebook ou iPad');
    expect(textElement).toBeInTheDocument();
  });
});
