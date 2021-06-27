import { urlBeatFilmMovies } from "./constants";

export default function MoviesApi() {
  return fetch(urlBeatFilmMovies)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка. Status: ${res.status}; Status text: ${res.statusText}`);
    })
}
