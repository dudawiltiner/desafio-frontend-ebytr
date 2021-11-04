/* É importante desabilitar essa configuração para o uso do Tailwind */
/* eslint-disable max-len */
import React from 'react';

/**
 * Componente Loading chamado nas Pages Home e Login
 * @returns uma tela de loading que aparec enquanto os outros
 * componentes que a estiverem usanda estiverem carregando
 */

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-20">
      <img className="w-1/5 animate-pulse" src="/list.svg" alt="Imagem de Loading" />
    </div>
  );
}
