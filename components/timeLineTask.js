/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function TimeLineTask({ showEdit }) {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const [seta, setSeta] = useState(['transition duration-500']);
  const [list, setList] = useState(['invisible h-0 transition duration-500']);

  const clickStep = (index) => {
    const newArray = seta;
    const newList = list;

    if (seta[index] === 'transition duration-500') {
      newArray[index] = 'transition duration-500 rotate-180';
      newList[index] = 'flex flex-col p-4 ml-12 space-y-2 bg-gray-100 transition duration-500 rounded-lg';
    } else {
      newArray[index] = 'transition duration-500';
      newList[index] = 'invisible h-0 transition duration-500';
    }
    setSeta([...newArray]);
    setList([...newList]);
  };
  return (
    <div className="relative w-4/6 m-8 ml-auto mr-auto">
      <div className="absolute top-0 z-0 w-1.5 h-full text-lg border-r-2 border-red-color border-t-6 left-0.5" />
      <ul className="p-0 m-0 list-none">
        <li className="mb-6">
          <div className="flex items-center mb-1">
            <div className="z-10 flex items-center justify-center w-4 h-4 rounded-full bg-red-color">
              <div className="w-2 h-2 bg-white border-2 border-gray-500 rounded-full " />
            </div>
            <div role="button" tabIndex="0" onClick={ () => clickStep(0) } className="flex justify-between w-full p-2 ml-4 font-medium text-gray-600 rounded-lg shadow-lg cursor-pointer">
              <div className="flex items-center space-x-4 text-lg dark:text-gray-100">
                <p>Título inteiro da tarefa 1</p>
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-5 rounded-full bg-red-color" />
                  <p>Pendente</p>
                </div>
                <button onClick={ () => showEdit('change') } type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-color" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" className={ `w-5 h-5 dark:text-gray-200 ${seta[0]}` } viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>

            </div>
          </div>
          <div className={ `${list[0]}` }>
            <div className="flex items-center justify-between border-b-2 border-gray-300">
              <p className="pb-1 text-lg text-gray-700">
                <b>Resposável:</b>
                {' '}
                Uma pessoa
              </p>
              <p className="justify-between pb-1 text-sm text-gray-800">22/10/2016 - 23/17/2016</p>
            </div>
            <div>
              <p className="pb-1 text-lg text-gray-700"><b>Descrição da Tarefa:</b></p>
              <p className="pb-1 pl-4 text-lg text-gray-700">Uma descrição breve sobre a tarefa</p>
            </div>
            <div className="flex justify-end">
              <p className="text-sm text-gray-700 opacity-50">Última modificação feita por Uma pessoa</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

TimeLineTask.propTypes = {
  showEdit: PropTypes.func,
}.Required;
