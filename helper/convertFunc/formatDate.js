export const formatDate = (selectedDate) => {
  const dateFormated = selectedDate.split('/');
  if (dateFormated.length === 1) {
    const arrayDate = selectedDate.split('-');
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
  }

  return selectedDate;
};

export const dateNow = () => {
  const data = new Date();
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

export const unDate = (dateOne) => {
  if (!dateOne) {
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`;
  }
  const dateUnFormated = dateOne.split('/');
  const dia = dateUnFormated[0];
  const mes = dateUnFormated[1];
  const ano = dateUnFormated[2];
  return `${ano}-${mes}-${dia}`;
};

export default { dateNow };
