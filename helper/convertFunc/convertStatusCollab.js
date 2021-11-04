export const NEGATIVENUMBER = -1;
export const POSITIVENUMBER = 1;
export const NULLNUMBER = 0;

/* Converte os status em números que possam ser avaliados
na comparação para ordenar a lista de tarefas */
export const convertStatus = (status) => {
  if (status === 'Pronto') {
    return POSITIVENUMBER;
  } if (status === 'Pendente') {
    return NEGATIVENUMBER;
  }
  return NULLNUMBER;
};

// Encontra o nome correspondente a cada id
export const foundName = (id, isStatus) => {
  const statusList = JSON.parse(localStorage.getItem('status'));
  const collabList = JSON.parse(localStorage.getItem('collabs'));
  if (isStatus && statusList !== null) {
    const statusFiltered = statusList.filter((item) => item.id === id);
    return statusFiltered[0].nameStatus;
  } if (collabList !== null) {
    const collabFiltered = collabList.filter((item) => item.id === id);
    return `${collabFiltered[0].nameCollab[0]} ${collabFiltered[0].nameCollab[1]}`;
  }
};

export default { convertStatus };
