export const BASE_URL = 'https://api.paradoxicallly.nomoredomains.icu';

export const register = (name ,email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name,  email, password})
  })
  .then(res => checkResponse(res))
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => checkResponse(res))
};

export const checkTokenValidity = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  })
  .then(res => checkResponse(res))
}

function checkResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}