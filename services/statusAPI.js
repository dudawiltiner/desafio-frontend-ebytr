const URL = 'https://desafio-backend-ebytr.herokuapp.com/status';

const headFunc = (token) => ({ Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token });

export const fetchGetAllStatus = (token) => (
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

export default { fetchGetAllStatus };
