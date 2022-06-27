
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}
const baseUrl = 'https://api.movies.surkova.nomoredomains.xyz';


  // Вывод ошибки
const _parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

// Регистрация
export const signup = ({ name, email, password  }) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => _parseResponse(res));
};

  //Авторизация
export const signin = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({ email, password })
  })
    .then((res) => _parseResponse(res));
};

  //Получение токена
// export const getToken = (jwt) => {
//   console.log (jwt);
//   return fetch(`${baseUrl}/users/me`, {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//       ...headers,
//       "Authorization": `Bearer ${jwt}`,
//     },
//   })
//   .then((res) => _parseResponse(res));
// };

  // Получение информации о пользователе
export const getUserInfo = (jwt) => {
  return fetch(`${baseUrl}/users/me`, {
    credentials: 'include',
    headers: {
      ...headers,
      "Authorization": `Bearer ${jwt}`,
    },
  })
  .then((res) => _parseResponse(res));
  }

  // Изменение информации пользователя
export const setUserInfo = (data, jwt) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      ...headers,
      "Authorization": `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    })
  })
  .then((res) => _parseResponse(res));
}

  // Получение фильмов
export const getMovies  = (jwt) => {
  return fetch (`${baseUrl}/movies`,{
    method: 'GET',
    credentials: 'include',
    headers,
  })
  .then((res) => _parseResponse(res));
}

  //Сохранение фильмов
export const saveMovie = (movie) => {
  return fetch (`${baseUrl}/movies`,{
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    })
  })
    .then(this._parseResponse);
};

  // Удаление фильмов
export const deleteMovie = (movieId) => {
  return fetch (`${baseUrl}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers,
  })
  .then(this._parseResponse);
};

