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

export default { fetchAuthCollaborator };
