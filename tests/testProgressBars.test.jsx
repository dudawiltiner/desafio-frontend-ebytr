import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../components/progressBar';

describe('Quando o componente ProgressBar for renderizado', () => {
  it('Deve aparecer como título desse componente "Progresso da Lista de Tarefas"', () => {
    render(<ProgressBar />);
    const titleElement = screen.getByText(/Progresso da Lista de Tarefas/i);
    expect(titleElement).toBeInTheDocument();
  });
});
