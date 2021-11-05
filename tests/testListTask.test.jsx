import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListTask from '../components/listTask';

describe('Quando o componente ListTask for renderizado', () => {
  it('Deve aparecer como título desse componente "Lista de tarefas"', () => {
    render(<ListTask />);
    const titleElement = screen.getByText(/Lista de Tarefas/i);
    expect(titleElement).toBeInTheDocument();
  });
});
