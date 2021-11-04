import cookieCutter from 'cookie-cutter';
import { fetchGetAllStatus } from '../../services/statusAPI';

/* Verficar se já existe um local storage que armazena
a lista de status, se já existir não abrirá uma requisição
para conseguir todos os status cadastrados para salva-los em
um item no local storage */
export const takeStatus = async () => {
  let arrayStatus = JSON.parse(localStorage.getItem('status'));

  if (!arrayStatus) {
    const rest = await fetchGetAllStatus(cookieCutter.get('token'));

    if (rest.message) {
      arrayStatus = [];
    } else {
      arrayStatus = rest;
    }

    const arraySplitStatus = arrayStatus.map((item) => ({
      // eslint-disable-next-line no-underscore-dangle
      id: item._id, nameStatus: item.statusName }));
    localStorage.setItem('status', JSON.stringify(arraySplitStatus));
  }
};

export default { takeStatus };
