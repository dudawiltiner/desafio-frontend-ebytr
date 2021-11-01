/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function TemplateCRUD({ showRemover, nameType, labelDeadline, labelStatus }) {
  return (
    <div className="flex flex-col items-start justify-center max-w-md p-12 rounded-lg shadow-xl shadow-white">
      <div className="flex items-center justify-between w-full mt-6 text-3xl text-gray-800 border-b border-gray-500">
        <p>{nameType}</p>
        <div className="text-blue-color">
          {showRemover
            ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-color" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>)
            : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>)}
        </div>
      </div>
      <form className="w-full mt-6 space-y-10">
        <div className="py-2 space-y-2 border-b border-brown-color">
          <input className="w-full py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none" type="text" placeholder="Digite o título da sua tarefa" />
        </div>

        <textarea placeHolder="Discorra uma breve descrição da sua tarefa" type="text" className="w-full p-2 bg-gray-200 rounded-lg resize-none h-44" maxLength="200" />

        <div className="flex space-x-5">
          <label htmlFor="deadline">
            <div className="p-2 rounded-md bg-blue-color">
              <p className="pb-1 text-white">{labelDeadline}</p>
              <input className="text-gray-600 rounded-sm" type="date" id="deadline" name="deadline" />
            </div>
          </label>

          <label htmlFor="status">
            <div className="p-2 rounded-md bg-yellow-color">
              <p className="pb-1 text-white">{labelStatus}</p>
              <select className="bg-white rounded-sm" id="status">
                <option value="Pendente">Pendente</option>
                <option value="Andamento">Andamento</option>
                <option value="Pronto">Pronto</option>
              </select>
            </div>
          </label>
        </div>

        <div className="text-lg">
          <label htmlFor="responsavel">
            <div className="flex items-center space-x-2">
              <p className="text-gray-900"><b>Responsável:</b></p>
              <select className="bg-white border-2 rounded-sm" id="responsavel">
                <option value="Fábio Reis">Fábio Reis</option>
                <option value="Andamento">Ana Calorina</option>
                <option value="Pronto">Fernando Agu</option>
              </select>
            </div>
          </label>
        </div>

        <div className="flex justify-end w-full space-x-4">
          { showRemover
            && (
              <button className="px-2 py-1 text-sm text-white border-4 border-teal-500 rounded cursor-pointer bg-brown-color" type="submit">
                Remover
              </button>)}
          <button className="px-2 py-1 text-sm text-white border-4 border-teal-500 rounded cursor-pointer bg-red-color" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

TemplateCRUD.propTypes = {
  labelDeadline: PropTypes.string,
  labelStatus: PropTypes.string,
  nameType: PropTypes.string,
  showRemover: PropTypes.boolean,
}.Required;
