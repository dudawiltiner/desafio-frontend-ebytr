/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function NavBar({ name }) {
  return (
  // reaproveitado o exemplo de navbar disponível na plataforma ofincial do tailwind
    <nav className="fixed z-20 w-full bg-white shadow-md">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <img className="cursor-pointer w-52" src="/logo.svg" alt="Imagem da logo" />
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              { name
              && (
                <div className="flex space-x-6">
                  <div className="items-center cursor-pointer flex px-3 py-2 space-x-1.5 text-md font-medium text-gray-800 rounded-md dark:hover:text-gray-400 hover:text-gray-600" aria-current="page">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-4 text-red-color" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    Nome completo do colaborador
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}

NavBar.propTypes = {
  name: PropTypes.boolean,
}.Required;
