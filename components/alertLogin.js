/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Componente AlertLogin usado na Page Login
 * @param { } param0 um OBJETO que carrega o valor da propriedade
 * via props
 * @returns um alerta descrevendo o erro que ocorreu na requisiação
 * pela autenticação
 */

export default function AlertLogin({ show, title, description }) {
  return (
    <div
      className={ `absolute px-4 py-3 text-red-900 bg-red-100 border-t-4 border-red-500 rounded-b shadow-md bottom-0 right-20 ${show}` }
      role="alert"
    >
      <div className="flex">
        <div className="py-1"><svg className="w-6 h-6 mr-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
        <div>
          <p className="text-lg font-bold">{ title }</p>
          <p className="text-lg">{ description }</p>
        </div>
      </div>
    </div>
  );
}

AlertLogin.propTypes = {
  description: PropTypes.string,
  show: PropTypes.string,
  title: PropTypes.string,
}.Required;
