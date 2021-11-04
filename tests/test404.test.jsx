import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as nextRouter from 'next/router';
import Custom404 from '../pages/404';
import '@testing-library/jest-dom';

describe('Quando tiver erro deve retornar uma página 404', () => {
  it('Aparece um título: "Oops... A página não foi encontrada."', () => {
    render(<Custom404 />);
    const textTitle = screen.getByText(/Oops... A página não foi encontrada./i);
    expect(textTitle).toBeInTheDocument();
  });

  it('Aparece uma descrição: "Você deve ter digitado o endereço errado..."', () => {
    render(<Custom404 />);
    const textDescription = screen
      .getByText(/Você deve ter digitado o endereço errado ou a página foi deslocada/i);
    expect(textDescription).toBeInTheDocument();
  });

  it('Deve conter um link para voltar a Home com o texto: "Ir para Home"', () => {
    render(<Custom404 />);
    const textLinkHome = screen
      .getByText(/Ir para Home/i);
    expect(textLinkHome).toBeInTheDocument();
    userEvent.click(textLinkHome);
  });

  it('Deve conter um link para voltar a Home com o texto: "Ir para Home"', () => {
    render(<Custom404 />);
    const textLinkHome = screen
      .getByText(/Ir para Home/i);
    expect(textLinkHome).toBeInTheDocument();
    userEvent.click(textLinkHome);
    const useRouter = jest.spyOn(nextRouter, 'useRouter');

    console.log(useRouter);
    expect(nextRouter.useRouter.rounte).toBe('/about');
  });
});
