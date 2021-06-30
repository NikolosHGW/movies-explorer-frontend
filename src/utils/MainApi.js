import { options } from "./constants";

const BASE_URL = 'https://api.mymovies.nomoredomains.icu';

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
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

export function getMovies() {
  return fetch(`${BASE_URL}/movies`, {
    ...options,
  })
    .then(checkResponse);
}

export function addMovie(bodyObj) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    ...options,
    body: JSON.stringify({
      country: bodyObj.country,
      director: bodyObj.director,
      duration: bodyObj.duration,
      year: bodyObj.year,
      description: bodyObj.description,
      image: `https://api.nomoreparties.co${bodyObj.image.url}`,
      trailer: bodyObj.trailerLink,
      thumbnail: `https://api.nomoreparties.co${bodyObj.image.formats.thumbnail.url}`,
      movieId: bodyObj.id,
      nameRU: bodyObj.nameRU,
      nameEN: bodyObj.nameEN,
    }),
  })
    .then(checkResponse);
}

export function deleteMovie(id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    ...options,
  })
    .then(checkResponse);
}
