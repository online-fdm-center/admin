import qs from 'qs'

class Api {
  // eslint-disable-next-line no-undef
  static apiUrl = API_URL

  /**
   * Стандартный обработчик ответа от сервера
   * @param {*} response 
   */
  defaultResponseHandler(response){
    if (response.ok){
      return (response.status === 204)
        ? null
        : response.json()
    } else{
      return Promise.reject(new Error(response.statusText))
    }
  }

  /**
   * Получение списка пользователей с сервера
   * @param {string} token токен авторизации
   * @param {object} filter фильтр
   */
  getUsers = (token, filter) => {
    return fetch(`//${Api.apiUrl}/users?${qs.stringify({filter})}`, {
      headers: {
        'x-admin-token': token
      }
    })
      .then(this.defaultResponseHandler)
  }

  /**
   * Создание пользователя
   * @param {string} token токен авторизации
   * @param {object} user пользователь
   */
  createUser = (token, user) => {
    return fetch(`//${Api.apiUrl}/users`, {
      headers: {
        'x-admin-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'POST'
    })
      .then(this.defaultResponseHandler)
  }

  /**
   * Изменение пользователя
   * @param {string} token токен авторизации
   * @param {object} user id пользователя
   */
  updateUser = (token, user) => {
    return fetch(`//${Api.apiUrl}/users/${user.id}`, {
      headers: {
        'x-admin-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'PATCH'
    })
      .then(this.defaultResponseHandler)
  }

  /**
   * Удаление пользователя
   * @param {string} token токен авторизации
   * @param {number} id id пользователя
   */
  deleteUser = (token, id) => {
    return fetch(`//${Api.apiUrl}/users/${id}`, {
      headers: {
        'x-admin-token': token,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then(this.defaultResponseHandler)
  }
  
}

export default new Api()