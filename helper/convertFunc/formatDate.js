/**
 * A função formata a data selecionada com separação "-"
 * @param {*} selectedDate a data escolhia no formulário de
 * criação e edição
 * @returns a data formatada com separação "/"
 */
export const formatDate = (selectedDate) => {
  const dateFormated = selectedDate.split('/');
  if (dateFormated.length === 1) {
    const arrayDate = selectedDate.split('-');
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
  }

  return selectedDate;
};

/**
 * A função gera uma nova data
 * @returns uma nova data no formato com separação "/"
 */
export const dateNow = () => {
  const data = new Date();
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

/**
 * A função formata a data que possui separação "/"
 * @param {*} dateOne data que vem da lista de tarefas
 * no formato "/"
 * @returns uma data no fromato com separação "-"
 */
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
