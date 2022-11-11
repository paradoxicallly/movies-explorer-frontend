const BASE_URL = 'http://localhost:4000';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

// user api
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
      headers: headers,
  })
  .then(res => checkResponse(res))
}

export const setUserInfo = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({
            name: name,
            email: email
          })
    })
    .then(res => checkResponse(res))
}


// movies api
export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      headers: headers,
  })
    .then(res => checkResponse(res))
}

export const addSavedMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(data)
    })
}

export const removeSavedMovies = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      headers: headers,
      method: 'DELETE'
  })
    .then(res => checkResponse(res))
}



// other
function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }