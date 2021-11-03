import cookieCutter from 'cookie-cutter';
import { fetchAuthCollaborator,
  fetchGetAllCollabs } from '../../services/collaboratorAPI';

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
