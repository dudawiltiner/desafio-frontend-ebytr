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

export default { convertStatus };
