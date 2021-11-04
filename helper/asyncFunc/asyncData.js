import cookieCutter from 'cookie-cutter';
import { fetchGetAllTask } from '../../services/taskAPI';
import { takeCollabs } from './asyncCollaborator';
import { takeStatus } from './asyncStatus';

/* Adquire todos os dados de tarefas, status e colaboradores
através dos fetchs e os salvam em itens no local storage */
export const getData = async () => {
  let arrayTasks = JSON.parse(localStorage.getItem('tasks'));

  if (!arrayTasks) {
    const rest = await fetchGetAllTask(cookieCutter.get('token'));

    if (rest.message) {
      console.log(rest);
      arrayTasks = [];
    } else {
      console.log(rest);
      arrayTasks = rest;
    }

    localStorage.setItem('tasks', JSON.stringify(arrayTasks));
  }

  await takeStatus();
  await takeCollabs();
};

export default { getData };
