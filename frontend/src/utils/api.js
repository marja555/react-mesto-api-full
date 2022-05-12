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
    return fetch(`${this._adress}/cards`, {
      headers: {
        authorization: this._token
      },
      credentials: 'include',
    }).then(this._handleResponse);
  }

  addCard({place, image}) {
    return fetch(`${this._adress}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
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
    return fetch(`${this._adress}/users/me`, {
      headers: {
        authorization: this._token
      },
      credentials: 'include',
    }).then(this._handleResponse)
  }

  getInitialData() {
    return Promise.all([this.getUser(), this.getCards()]);
  }

  setUserInfo({name, job}) {
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
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
    return fetch(`${this._adress}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      },
      credentials: 'include',
    })
    .then(this._handleResponse)
  }

  editAvatar(avatar) {
    return fetch(`${this._adress}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(avatar)
    })
    .then(this._handleResponse)
  }


  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._adress}/cards/${id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token
      },
      credentials: 'include',
    })
      .then(this._handleResponse)
  }
}

const api = new Api({
  adress: 'https://api.mesto.students.nomoredomains.xyz',
  // token: '046e1e7e-a85b-4246-8cd0-fe8501647960'
});

export default api;