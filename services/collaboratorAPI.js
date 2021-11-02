import { headFunc } from './taskAPI';

const URL = 'https://desafio-backend-ebytr.herokuapp.com/collaborator';

export const fetchAuthCollaborator = (collaboratorEmail, collaboratorPassword) => (
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      collaboratorEmail,
      collaboratorPassword,

    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchGetAllCollabs = (token) => (
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

export default { fetchAuthCollaborator };
