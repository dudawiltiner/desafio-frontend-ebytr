/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createOne, deleteOne, updateOne } from '../helper/asyncFunc/asyncTasks';
import { unDate } from '../helper/convertFunc/formatDate';

export default function TemplateCRUD({ showRemover, nameType, labelDeadline, labelStatus, close, task }) {
  const [statusList] = useState(JSON.parse(localStorage.getItem('status')));
  const [collabsList] = useState(JSON.parse(localStorage.getItem('collabs')));
  const [title, setTitle] = useState(!task.title ? '' : task.title);
  const [description, setDescription] = useState(!task.description ? '' : task.description);
  const [status, setStatus] = useState(!task.statusId ? statusList[0].id : task.statusId);
  const [date, setDate] = useState(unDate(task.deadlineDate));
  const [collab, setCollab] = useState(!task.collaboratorId ? collabsList[0].id : task.collaboratorId);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const router = useRouter();

  const createTask = async () => {
    setShow1(!show1);
    await createOne({ title, description, status, date, collab, router });
    setShow1(false);
  };

  const deleteTask = async () => {
    setShow(!show);
    await deleteOne(task, router);
    setShow(false);
  };

  const updateTask = async () => {
    setShow1(!show1);
    await updateOne({
      task, collab, status, title, description, date, router });
    setShow1(false);
  };

  return (
    <div className="fixed top-0 bottom-0 z-40 flex items-center justify-center bg-gray-700 bg-opacity-70 right-40 left-40 xl:right-0 xl:left-0">
      <div className="flex flex-col items-start justify-center max-w-md px-12 pt-4 pb-12 bg-white rounded-lg shadow-xl right-40 left-40 shadow-white">
        <button type="button" onClick={ () => close('') } className="flex justify-end w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-red-color text-blue-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center justify-between w-full mt-6 text-3xl text-gray-800 border-b border-gray-500">
          <p>{nameType}</p>
          <div className="text-blue-color">
            {showRemover
              ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                </svg>)
              : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>)}
          </div>
        </div>
        <form className="w-full mt-6 space-y-10">
          <div className="py-2 space-y-2 border-b border-brown-color">
            <input
              onChange={ ({ target }) => setTitle(target.value) }
              defaultValue={ task.title }
              className="w-full py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
              required
              type="text"
              placeholder="Digite o título da sua tarefa"
            />
          </div>

          <textarea
            onChange={ ({ target }) => setDescription(target.value) }
            defaultValue={ task.description }
            placeholder="Discorra uma breve descrição da sua tarefa"
            type="text"
            required
            className="w-full p-2 leading-tight bg-gray-200 rounded-lg appearance-none resize-none focus:outline-none h-44"
            maxLength="200"
          />

          <div className="flex space-x-5">
            <label htmlFor="deadline">
              <div className="p-2 rounded-md bg-blue-color">
                <p className="pb-1 text-white">{labelDeadline}</p>
                <input
                  onChange={ ({ target }) => setDate(target.value) }
                  defaultValue={ unDate(task.deadlineDate) }
                  className="text-gray-600 rounded-sm focus:outline-none"
                  type="date"
                  id="deadline"
                  name="deadline"
                  required
                />
              </div>
            </label>

            <label htmlFor="status">
              <div className="p-2 rounded-md bg-yellow-color">
                <p className="pb-1 text-white">{labelStatus}</p>
                <select
                  onChange={ ({ target }) => setStatus(target.value) }
                  className="bg-white rounded-sm focus:outline-none"
                  id="status"
                  required
                >
                  {statusList.map((item) => <option key={ item.id } value={ item.id }>{item.nameStatus}</option>)}
                </select>
              </div>
            </label>
          </div>

          <div className="text-lg">
            <label htmlFor="responsavel">
              <div className="flex items-center space-x-2">
                <p className="text-gray-900"><b>Responsável:</b></p>
                <select
                  defaultValue={ collabsList[0].id }
                  onChange={ ({ target }) => setCollab(target.value) }
                  className="bg-white border-2 rounded-sm focus:outline-none"
                  id="responsavel"
                  required
                >
                  {collabsList.map((item) => <option key={ item.id } value={ item.id }>{`${item.nameCollab[0]} ${item.nameCollab[1]}`}</option>)}
                </select>
              </div>
            </label>
          </div>

          <div className="flex justify-end w-full space-x-4">
            { showRemover
            && (
              <button
                onClick={ deleteTask }
                className="px-2 py-1 text-sm text-white border-4 border-teal-500 rounded cursor-pointer bg-brown-color"
                type="button"
              >
                { show
                  ? (
                    <div className="flex">
                      <div className="w-4 h-4 p-1 mr-2 border-b-2 border-white rounded-full animate-spin" />
                      Processando
                    </div>)
                  : 'Remover'}
              </button>)}
            <button
              onClick={ showRemover ? updateTask : createTask }
              className="px-2 py-1 text-sm text-white border-4 border-teal-500 rounded cursor-pointer bg-red-color"
              type="button"
            >
              { show1
                ? (
                  <div className="flex">
                    <div className="w-4 h-4 p-1 mr-2 border-b-2 border-white rounded-full animate-spin" />
                    Processando
                  </div>)
                : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

TemplateCRUD.propTypes = {
  labelDeadline: PropTypes.string,
  labelStatus: PropTypes.string,
  nameType: PropTypes.string,
  showRemover: PropTypes.boolean,
}.Required;
