class Auth {
    constructor(address) {
        this._address = address;
    }
    _handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }

    registration({email, password}) {
        return fetch(`${this._address}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                email, 
                password})
        })
        .then(this._handleResponse);
    }
    authorization({email, password}) {
        return fetch(`${this._address}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(this._handleResponse);
    }
    getUser() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        })
        .then(this._handleResponse);
    }
}
// const auth = new Auth('https://api.mesto.students.nomoredomains.xyz');
const auth = new Auth('http://localhost:3002');
export default auth;