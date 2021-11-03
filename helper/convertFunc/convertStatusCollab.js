export const NEGATIVENUMBER = -1;
export const POSITIVENUMBER = 1;
export const NULLNUMBER = 0;

export const convertStatus = (status) => {
  if (status === 'Pronto') {
    return POSITIVENUMBER;
  } if (status === 'Pendente') {
    return NEGATIVENUMBER;
  }
  return NULLNUMBER;
};

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
