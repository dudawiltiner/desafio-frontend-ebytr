import cookieCutter from 'cookie-cutter';
import { fetchAuthCollaborator,
  fetchGetAllCollabs } from '../../services/collaboratorAPI';

/* Verficar se já existe um local storage que armazena
a lista de colaboradores, se já existir não abrirá uma requisição
para conseguir todos os colaboradores cadastrados para salva-los em
um item no local storage */
export const takeCollabs = async () => {
  let arrayCollabs = JSON.parse(localStorage.getItem('collabs'));

  if (!arrayCollabs) {
    const rest = await fetchGetAllCollabs(cookieCutter.get('token'));

    if (rest.message) {
      arrayCollabs = [];
    } else {
      arrayCollabs = rest;
    }

    const arraySplitCollabs = arrayCollabs.map((item) => ({
      // eslint-disable-next-line no-underscore-dangle
      id: item._id, nameCollab: item.collaboratorName.split(' ') }));

    localStorage.setItem('collabs', JSON.stringify(arraySplitCollabs));
  }
};

/* Realiza uma requisição para encontrar o usuário e salvar
o token e o nome do collaborador no formato de cookie */
export const authOne = async (email, password, router) => {
  try {
    const res = await fetchAuthCollaborator(email, password);
    if (!res.message) {
      const dateLater = new Date();
      dateLater.setDate(dateLater.getDate() + 1);
      // console.log(dateLater)
      cookieCutter.set('token', res.token, { expires: dateLater });
      cookieCutter.set('collaborator', res.collaborator, { expires: dateLater });
      console.log(res, cookieCutter.get('token'), cookieCutter.get('collaborator'));
      router.push('/');
    }

    return res.message;
  } catch (error) {
    console.log(error);
  }
};

export default { takeCollabs };
