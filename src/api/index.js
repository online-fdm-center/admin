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
      return response.json()
    } else{
      return Promise.reject(new Error(response.statusText))
    }
  }

  getUsers = (token, filter) => {
    return fetch(`//${Api.apiUrl}/users?${qs.stringify({filter})}`, {
      headers: {
        'x-admin-token': token
      }
    })
      .then(this.defaultResponseHandler)
  }
  
}

export default new Api()