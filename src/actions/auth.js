import api from '../api'

export const TEST_LOGIN = 'TEST_LOGIN'
export const TEST_LOGIN_FAILED = 'TEST_LOGIN_FAILED'
export const TEST_LOGIN_SUCCESS = 'TEST_LOGIN_SUCCESS'

export const login = (token) => {
  return (dispatch) => {
    dispatch({type: TEST_LOGIN})
    api.getUsers(token, {limit: 1}).then(() => {
      localStorage.setItem('x-admin-token', token)
      dispatch({type: TEST_LOGIN_SUCCESS, token})
    }, () => {
      dispatch({type: TEST_LOGIN_FAILED})
    })
  }
}

export const UNLOGIN = 'UNLOGIN'

export const unlogin = () => {
  return (dispatch) => {
    localStorage.removeItem('x-admin-token')
    dispatch({type: UNLOGIN})
  }
}