/* É importante desabilitar essas configurações para o uso do Tailwind */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';

/**
 * Componente NavBar usada nas Pages Home e Login
 * @param {*} param0 um OBJETO com os valores de
 * propriedades via props.
 * @returns um navbar que mostra a logo da Ebytr e
 * o nome completo do usuário, quando necessário.
 */

export default function NavBar({ showName, name }) {
  const [show, setShow] = useState(false);
  const router = useRouter();

  /* A função logOut Vai direcionar o usuário para a página de Login
  e exluir todos os cookies e localStorage */
  function logOut() {
    cookieCutter.set('token', ' ', { expires: new Date(0) });
    cookieCutter.set('collborator', ' ', { expires: new Date(0) });
    localStorage.removeItem('status');
    localStorage.removeItem('tasks');
    localStorage.removeItem('collabs');
    router.push('/login');
  }

  return (
  // reaproveitado o exemplo de navbar disponível na plataforma ofincial do tailwind
    <nav className="fixed z-20 w-full bg-white shadow-md">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <img className="cursor-pointer w-52" src="/logo.svg" alt="Imagem da logo" />
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              { showName
              && (
                <div className="flex space-x-6">
                  <button type="button" onClick={ () => setShow(!show) } className="items-center cursor-pointer flex px-3 py-2 space-x-1.5 text-md font-medium text-gray-800 rounded-md hover:text-gray-600" aria-current="page">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-4 text-blue-color" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    {name}
                  </button>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {show
        && (
          <button
            type="button"
            onClick={ logOut }
            className="absolute flex p-2 space-x-2 text-gray-700 bg-white rounded-sm shadow-md cursor-pointer xl:right-1/4 hover:text-red-color right-32 top-14 w-52"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            <p className="pr-6">
              Sair
            </p>
          </button>)}
    </nav>

  );
}

NavBar.propTypes = {
  name: PropTypes.string,
  showName: PropTypes.boolean,
}.Required;
