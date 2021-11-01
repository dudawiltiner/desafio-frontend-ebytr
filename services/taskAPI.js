const URL = 'https://desafio-backend-ebytr.herokuapp.com/task';

export const fetchGetAllTask = (token) => (
  fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    })
);

export default { fetchGetAllTask };
