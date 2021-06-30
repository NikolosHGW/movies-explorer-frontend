import { options } from "./constants";

const BASE_URL = 'https://api.mymovies.nomoredomains.icu';

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  console.log(res);
  return res.json().then(res => {
    throw new Error(res.message)
  });
}

export function getInfoUser() {
  return fetch(`${BASE_URL}/users/me`, {
    ...options,
  })
    .then(checkResponse);
}

export function editInfoUser(name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    ...options,
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then(checkResponse);
}

// function getPromise(endPoint, bodyObj) {
//   return fetch(`${BASE_URL}${endPoint}`, {
//     method: 'POST',
//     ...options,
//     body: JSON.stringify(bodyObj),
//   })
//     .then(checkResponse);
// }

// export function register(name, email, password) {
//   const bodyObj = {
//     name, email, password,
//   }
//   return getPromise('/signup', bodyObj);
// }

// export function authorize(email, password) {
//   const bodyObj = {
//     email, password,
//   }
//   return getPromise('/signin', bodyObj);
// }

// export function logout() {
//   return fetch(`${BASE_URL}/logout`, {
//     method: 'POST',
//     ...options,
//   })
//     .then(checkResponse);
// }
