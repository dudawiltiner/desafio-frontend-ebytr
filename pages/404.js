/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React from 'react';

export default function Custom404() {
  return (
    <div className="flex items-center min-h-screen text-white dark:bg-dark-color">
      <header>
        <link href="/static/404.css" rel="stylesheet" />
      </header>
      <div className="container flex flex-wrap items-center p-4 mx-auto">
        <div className="w-4/5 p-4 text-center md:w-5/12">
          <img className="" src="/question.svg" alt="Não encontrado" />
        </div>
        <div className="w-full p-16 text-center text-gray-700 md:w-7/12 md:text-left">
          <div className="mb-10 text-6xl font-medium text-red-color">404</div>
          <div className="mb-4 text-xl font-medium dark:text-gray-100 md:text-3xl">
            Oops... A página está perdida no espaço
          </div>
          <div className="mb-8 text-lg dark:text-gray-200">
            Você deve ter digitado o endereço errado ou a página foi deslocada.
          </div>
          <a href="/" className="flex items-center space-x-1 text-lg text-blue-color dark:text-gray-100">
            <p><b>Ir para Home</b></p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>

  );
}
