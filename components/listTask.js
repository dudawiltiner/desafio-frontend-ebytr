/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useState } from 'react';
import TemplateCRUD from './templateCRUD';
import TimeLineTask from './timeLineTask';

export default function ListTask() {
  const [showForms, setShowForms] = useState('');
  const [taskOne, setTaskOne] = useState({});

  const createTask = () => {
    setTaskOne({});
    setShowForms('create');
  };
  return (
    <div className="max-w-6xl m-10 ml-auto mr-auto">
      <div className="flex items-center justify-between w-1/3 mt-20 mb-16 ml-20 text-2xl text-gray-800 border-b border-gray-300 xl:ml-44">
        <p>Lista de Tarefas</p>
        <button
          onClick={ createTask }
          type="button"
          className="border-2 text-blue-color border-blue-color"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <TimeLineTask showEdit={ setShowForms } setTask={ setTaskOne } />
      {showForms === 'create'
        ? (
          <TemplateCRUD
            close={ setShowForms }
            task={ taskOne }
            showRemover={ false }
            nameType="Criando uma tarefa"
            labelDeadline="Escolha o prazo da tarefa"
            labelStatus="Escolha o Status"
          />)
        : showForms === 'change'
        && <TemplateCRUD
          close={ setShowForms }
          task={ taskOne }
          showRemover
          nameType="Editando uma tarefa"
          labelDeadline="Mude o prazo da tarefa"
          labelStatus="Mude o Status"
        />}
    </div>
  );
}
