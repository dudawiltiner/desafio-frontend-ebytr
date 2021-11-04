/* eslint-disable no-underscore-dangle */
import cookieCutter from 'cookie-cutter';
import { dateNow, formatDate } from '../convertFunc/formatDate';
import {
  fetchCreateTask,
  fetchDeleteTask,
  fetchUpdateTask } from '../../services/taskAPI';

/* Cria uma nova tarefa no banco de dados através do fetch, numa requisição,
e alterando a lista tarefas salvas no local storage */
export const createOne = async ({ title, description, status, date, collab, router }) => {
  console.log(title, description, status, date, collab);

  try {
    const res = await fetchCreateTask({
      token: cookieCutter.get('token'),
      collaboratorId: collab,
      statusId: status,
      title,
      description,
      deadlineDate: formatDate(date),
    });
    if (res.id) {
      console.log(res);
      const arrayTotal = JSON.parse(localStorage.getItem('tasks'));
      arrayTotal.push({
        _id: res.id,
        collaboratorId: collab,
        statusId: status,
        title,
        description,
        createdDate: dateNow(),
        deadlineDate: formatDate(date),
      });
      console.log(arrayTotal);
      localStorage.setItem('tasks', JSON.stringify(arrayTotal));
      router.reload();
    }

    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};

/* Deleta uma tarefa do banco de dados através do fetch, numa requisição,
e alterando a lista tarefas salvas no local storage */
export const deleteOne = async (task, router) => {
  try {
    const res = await fetchDeleteTask({
      token: cookieCutter.get('token'),
      id: task._id,
    });
    if (res.message === 'Tarefa excluída com sucesso') {
      const arrayTotal = JSON.parse(localStorage.getItem('tasks'));
      const newA = arrayTotal.filter((item) => item._id !== task._id);
      console.log(arrayTotal);
      localStorage.setItem('tasks', JSON.stringify(newA));
      router.reload();
    }
    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};

/* Atualiza uma tarefa do banco de dados através do fetch, numa requisição,
e alterando a lista tarefas salvas no local storage */
export const updateOne = async ({
  task, collab, status, title, description, date, router }) => {
  try {
    const res = await fetchUpdateTask({
      token: cookieCutter.get('token'),
      id: task._id,
      collaboratorId: collab,
      statusId: status,
      title,
      description,
      deadlineDate: formatDate(date),
    });

    if (res.message.includes('Tarefa atualizada com sucesso')) {
      console.log(res);
      const arrayTotal = JSON.parse(localStorage.getItem('tasks'));
      const index = arrayTotal.findIndex((item) => item._id === task._id);
      arrayTotal[index] = {
        _id: task._id,
        collaboratorId: collab,
        statusId: status,
        title,
        description,
        createdDate: task.createdDate,
        deadlineDate: formatDate(date),
      };
      console.log(arrayTotal);
      localStorage.setItem('tasks', JSON.stringify(arrayTotal));
      router.reload();
    }

    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};

export default { createOne };
