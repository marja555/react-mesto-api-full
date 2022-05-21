class Api {
  constructor(address) {
    this._address = address;
  }

  _handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
      credentials: 'include',
    }).then(this._handleResponse);
  }

  addCard({place, image}) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: place,
        link: image
      })
    })
    .then(this._handleResponse)
  }

  getUser() {
    return fetch(`${this._address}/users/me`, {
      credentials: 'include',
    }).then(this._handleResponse)
  }

  getInitialData() {
    return Promise.all([this.getUser(), this.getCards()]);
  }

  setUserInfo({name, job}) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        about: job
      })
    })
    .then(this._handleResponse)
  }

  deleteCard(_id) {
    return fetch(`${this._address}/cards/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(this._handleResponse)
  }

  editAvatar(avatar) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(avatar)
    })
    .then(this._handleResponse)
  }


  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      credentials: 'include',
    })
      .then(this._handleResponse)
  }

  logout() {
    return fetch(`${this._address}/logout`, {
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
    })
    .then(this._handleResponse)
  }
}

// const api = new Api('https://api.mesto.students.nomoredomains.xyz');

const api = new Api('http://localhost:3002');

export default api;