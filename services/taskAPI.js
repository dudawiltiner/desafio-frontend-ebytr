const URL = 'https://desafio-backend-ebytr.herokuapp.com/task';

export const headFunc = (token) => ({ Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token });

export const fetchGetAllTask = (token) => (
  fetch(URL, {
    method: 'GET',
    headers: headFunc(token),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    })
);

export const fetchCreateTask = ({ token,
  collaboratorId,
  statusId,
  title,
  description,
  deadlineDate }) => (
  fetch(URL, {
    method: 'POST',
    headers: headFunc(token),
    body: JSON.stringify({
      collaboratorId,
      statusId,
      title,
      description,
      deadlineDate,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    })
);

export const fetchDeleteTask = ({ token, id }) => (
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: headFunc(token),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    })
);

export const fetchUpdateTask = ({ token,
  id,
  collaboratorId,
  statusId,
  title,
  description,
  deadlineDate }) => (
  fetch(URL, {
    method: 'PUT',
    headers: headFunc(token),
    body: JSON.stringify({
      id,
      collaboratorId,
      statusId,
      title,
      description,
      deadlineDate,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    })
);

export default { fetchGetAllTask };
