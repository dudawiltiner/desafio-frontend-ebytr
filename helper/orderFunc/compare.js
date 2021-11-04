import {
  convertStatus,
  foundName,
  NEGATIVENUMBER,
  NULLNUMBER,
  POSITIVENUMBER } from '../convertFunc/convertStatusCollab';

/* A função compara os status e vai ser usada
ordenar a lista de tarefas */
export const compareStatus = (a, b) => {
  if (convertStatus(foundName(a.statusId, true))
  < convertStatus(foundName(b.statusId, true))) { return NEGATIVENUMBER; }

  if (convertStatus(foundName(a.statusId, true))
  > convertStatus(foundName(b.statusId, true))) { return POSITIVENUMBER; }
  return NULLNUMBER;
};

/* A função compara os títulos e vai ser usada
ordenar a lista de tarefas */
export const compareTitle = (a, b) => {
  if (a.title.toUpperCase() < b.title.toUpperCase()) { return NEGATIVENUMBER; }
  if (a.title.toUpperCase() > b.title.toUpperCase()) { return POSITIVENUMBER; }
  return NULLNUMBER;
};

/* A função compara as datas de criação e vai ser usada
ordenar a lista de tarefas */
export const compareDate = (a, b) => {
  if (a.createdDate < b.createdDate) { return NEGATIVENUMBER; }
  if (a.createdDate > b.createdDate) { return POSITIVENUMBER; }
  return NULLNUMBER;
};

export default { compareStatus, compareTitle, compareDate };
