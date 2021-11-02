/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { foundName } from '../helper/convertFunc/convertStatusCollab';
import TemplateBar from './templateBar';

export default function ProgressBar({ collaborator }) {
  const [tasks] = useState(JSON.parse(localStorage.getItem('tasks')));
  let tasksDone;
  let noTasksDone;
  if (tasks.length !== 0) {
    tasksDone = tasks.filter((item) => foundName(item.statusId, true) === 'Pronto');
    noTasksDone = tasks.filter((item) => foundName(item.statusId, true) !== 'Pronto');
  }
  const PERCENT = (tasksDone.length / tasks.length) * 100;

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="max-w-4xl m-10 mt-32 ml-auto mr-auto">
      <p className="text-4xl text-gray-800">{`Boas-vindas, ${collaborator}!`}</p>
      <div className="flex p-10 mt-10 rounded-lg shadow-xl">
        <div className="w-2/3 ">
          <p className="text-2xl text-gray-800 border-b border-gray-300 dark:border-gray-500">Progresso da Lista de Tarefas</p>
          <div className="relative pt-16">
            <TemplateBar progressPercentage={ PERCENT } />
          </div>
          <ol className="flex flex-col flex-wrap items-start mt-16 space-y-1 text-gray-700 list-disc list-inside max-h-44 text-md">
            { tasksDone.length !== 0 && tasksDone.map((item, index) => (
              <li key={ index } className="flex mr-10">
                {`${item.title} - ${foundName(item.collaboratorId, false)}`}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </li>)) }

            { noTasksDone.length !== 0 && noTasksDone.map((item, index) => (
              <li key={ index } className="flex mr-10">
                {`${item.title} - ${foundName(item.collaboratorId, false)}`}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-color" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </li>)) }
          </ol>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  collaborator: PropTypes.string,
}.Required;
