/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { convertStatus, foundName, NEGATIVENUMBER, NULLNUMBER, POSITIVENUMBER } from '../helper/convertFunc/convertStatusCollab';

export default function TimeLineTask({ showEdit, setTask }) {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')));
  const [colors] = useState({ Pendente: 'red', Andamento: 'yellow', Pronto: 'blue' });
  const [seta, setSeta] = useState(taskList.map(() => ''));
  const [list, setList] = useState(taskList.map(() => 'invisible h-0'));

  const saveTask = (task) => {
    setTask(task);
    showEdit('change');
  };

  const clickStep = (index) => {
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

  const alphabeticalOrder = () => {
    function compare(a, b) {
      if (a.title.toUpperCase() < b.title.toUpperCase()) { return NEGATIVENUMBER; }
      if (a.title.toUpperCase() > b.title.toUpperCase()) { return POSITIVENUMBER; }
      return NULLNUMBER;
    }

    const arrayList = taskList.sort(compare);
    setTaskList([...arrayList]);
  };

  const dateOrder = () => {
    function compare(a, b) {
      if (a.createdDate < b.createdDate) { return NEGATIVENUMBER; }
      if (a.createdDate > b.createdDate) { return POSITIVENUMBER; }
      return NULLNUMBER;
    }

    const arrayList = taskList.sort(compare);
    setTaskList([...arrayList]);
  };

  const statusOrder = () => {
    function compare(a, b) {
      if (convertStatus(foundName(a.statusId, true)) < convertStatus(foundName(b.statusId, true))) { return NEGATIVENUMBER; }
      if (convertStatus(foundName(a.statusId, true)) > convertStatus(foundName(b.statusId, true))) { return POSITIVENUMBER; }
      return NULLNUMBER;
    }

    const arrayList = taskList.sort(compare);
    setTaskList([...arrayList]);
  };

  return (
    <div>
      <div className="flex w-5/6 m-8 mb-16 ml-auto mr-auto space-x-10 xl:w-4/6 ">
        <button onClick={ dateOrder } type="button" className="flex items-center px-2 py-1 space-x-2 text-white rounded-md bg-blue-color">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Organizar por Data</p>
        </button>
        <button onClick={ alphabeticalOrder } type="button" className="flex items-center px-2 py-1 space-x-2 text-white rounded-md bg-brown-color">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
          </svg>
          <p>Em Ordem Alfabética</p>
        </button>
        <button onClick={ statusOrder } type="button" className="flex items-center px-2 py-1 space-x-2 text-white rounded-md bg-yellow-color">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p>Organizar por Status</p>
        </button>
      </div>

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
                <div role="button" tabIndex="0" onClick={ () => clickStep(index) } className="flex justify-between w-full p-2 ml-4 font-medium text-gray-600 rounded-lg shadow-lg cursor-pointer">
                  <div className="flex items-center space-x-4 text-lg">
                    <p>{`${item.title} - ${foundName(item.collaboratorId, false)}`}</p>
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
