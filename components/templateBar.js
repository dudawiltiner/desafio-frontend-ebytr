import PropTypes from 'prop-types';
import React from 'react';

/**
 * Um componente TemplateBar que será chamado no componente ProgressBar
 * @param {*} param0 um OBJETO com o valor
 * de uma propriedade via props
 * @returns uma barra de progresso com base
 * na porcentagem passada
 */

export default function TemplateBar({ progressPercentage }) {
  return (
    <div>
      <div className="h-4 bg-gray-300 rounded-full w-12/12">
        <div
          style={ { width: `${progressPercentage}%` } }
          className="h-full rounded-full bg-blue-color"
        />
      </div>
    </div>
  );
}

TemplateBar.propTypes = {
  progressPercentage: PropTypes.integer,
}.Required;
