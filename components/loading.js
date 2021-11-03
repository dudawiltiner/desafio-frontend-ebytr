/* eslint-disable max-len */
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-20">
      <img className="w-1/5 animate-pulse" src="/list.svg" alt="Imagem de Loading" />
    </div>
  );
}
