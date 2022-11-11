const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export const getAllMovies = () => {
    return fetch(BASE_URL, {
        headers: headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
}