/* É importante desabilitar essas configurações para o uso do Tailwind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cookieCutter from 'cookie-cutter';
import { foundIdCollaborator, foundName } from '../helper/convertFunc/convertStatusCollab';
import { compareDate, compareStatus, compareTitle } from '../helper/orderFunc/compare';
import ButtonOrder from './buttonOrder';

/**
 * Componente TimeLineTask chamado na Page ListTask.
 * @param {*} param0  recebe com parâmetro um OBJETO
 * com duas propriedades via props.
 * @returns uma estrutura que vai mostrar uma lista
 * de tarefas que estarão armazenadas num localStorage
 * Também vai retornar botões para ordenar a Lista.
 */

export default function TimeLineTask({ showEdit, setTask }) {
  const [taskList, setTaskList] = useState(!localStorage.getItem('tasks') ? []
    : JSON.parse(localStorage.getItem('tasks')));
  const [originalTasks, setOriginalTasks] = useState([]);
  const [collaboratorName] = useState(cookieCutter.get('collaborator'));
  const [colors] = useState({ Pendente: 'red', Andamento: 'yellow', Pronto: 'blue' });
  const [isFiltered, setIsFiltered] = useState(false);
  const [seta, setSeta] = useState(taskList.map(() => ''));
  const [list, setList] = useState(taskList.map(() => 'invisible h-0'));

  const saveTask = (task) => {
    /* Vai fazer com que apareça valores no input
     diferente do que acontece na criação de uma tarefa */
    setTask(task);
    /* Vai fazer com que a formulário de edição de uma
     tarefa apareça */
    showEdit('change');
  };

  /* A função vai disponibilizar um conetúdo com mais
  detalhes sobre a tarefa que o usuário acabou de clicar */
  const clickTask = (index) => {
    const newArray = seta;
    const newList = list;

    if (seta[index].length === 0) {
      newArray[index] = 'rotate-180';
      newList[index] = '';
    } else {
      newArray[index] = '';
      newList[index] = 'invisible h-0';
    }
    setSeta([...newArray]);
    setList([...newList]);
  };

  // A função ordena a lista por ordem alfabética
  const alphabeticalOrder = () => {
    const arrayList = taskList.sort(compareTitle);
    setTaskList([...arrayList]);
  };

  // A função ordena por data de criação
  const dateOrder = () => {
    const arrayList = taskList.sort(compareDate);
    setTaskList([...arrayList]);
  };

  // A função ordena pelo status
  const statusOrder = () => {
    const arrayList = taskList.sort(compareStatus);
    setTaskList([...arrayList]);
  };

  // A função filtra todas as atividades referentes ao usuário
  const nameFilter = () => {
    if (isFiltered) {
      setTaskList([...originalTasks]);
      setIsFiltered(false);
    } else {
      const collabId = foundIdCollaborator(collaboratorName);
      setOriginalTasks([...taskList]);
      const arrayList = taskList.filter((task) => task.collaboratorId === collabId);
      setTaskList([...arrayList]);
      setIsFiltered(true);
    }
  };

  return (
    <div>
      <ButtonOrder
        dateFuncOrder={ dateOrder }
        alphaFuncOrder={ alphabeticalOrder }
        statusFuncOrder={ statusOrder }
        filterNameFunc={ nameFilter }
        filterStatus={ isFiltered }
      />
      <div className="relative w-4/6 m-8 ml-auto mr-auto">
        <div className="absolute top-0 z-0 w-1.5 h-full text-lg border-r-2 border-red-color border-t-6 left-0.5" />
        <ul className="p-0 m-0 list-none">
          {taskList.length !== 0
          && taskList.map((item, index) => (
            <li key={ index } className="mb-4">
              <div className="flex items-center mb-1 space-x-4">
                <div className="z-10 flex items-center justify-center w-4 h-4 rounded-full bg-red-color">
                  <div className="w-2 h-2 bg-white border-2 border-gray-500 rounded-full " />
                </div>
                <div role="button" tabIndex="0" onClick={ () => clickTask(index) } className="flex justify-between w-full p-2 ml-4 font-medium text-gray-600 rounded-lg shadow-lg cursor-pointer">
                  <div className="flex items-center space-x-4 text-lg">
                    <p>{item.title}</p>
                    <div className="flex items-center space-x-1">
                      <div className={ `w-5 h-5 rounded-full bg-${colors[foundName(item.statusId, true)]}-color` } />
                      <p>{foundName(item.statusId, true)}</p>
                    </div>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" className={ `w-5 h-5 transition duration-500 ${seta[index]}` } viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>

                </div>
                <button onClick={ () => saveTask(item) } type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-color" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className={ `${list[index]} transition duration-500 rounded-lg flex flex-col p-4 ml-12 space-y-2 bg-gray-100` }>
                <div className="flex items-center justify-start border-b-2 border-gray-300">
                  <p className="pb-1 text-lg text-gray-700">
                    <b>Resposável:</b>
                    {' '}
                    {foundName(item.collaboratorId, false)}
                  </p>
                  <p className="justify-between pb-1 text-sm text-gray-800" />
                </div>
                <div>
                  <p className="pb-1 text-lg text-gray-700"><b>Descrição da Tarefa:</b></p>
                  <p className="pb-1 pl-4 text-lg text-gray-700">{item.description}</p>
                </div>
                <div className="flex justify-end">
                  <p className="text-sm text-gray-700 opacity-50">{`${item.createdDate} - ${item.deadlineDate}`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

TimeLineTask.propTypes = {
  showEdit: PropTypes.func,
}.Required;
