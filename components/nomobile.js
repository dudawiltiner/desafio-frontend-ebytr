/* É importante desabilitar essa configuração para o uso do Tailwind */
/* eslint-disable max-len */
import React from 'react';

/**
 * Um componente NoMobile chamado nas pages Home e Login
 * @returns uma página avisando para o usuário
 * que não há versão mobile da aplicação
 */

function NoMobile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen md:invisible md:h-0">
      <img
        className="w-1/2 duration-1000 delay-800 animate-bounce-slow xl:w-1/4"
        src="/list.svg"
        alt="Imagem de Lista"
      />
      <p className="mb-2 text-lg font-bold text-red-color">Não há versão para celular</p>
      <p className="font-bold">Acesse num notebook ou iPad</p>
    </div>
  );
}

export default NoMobile;
