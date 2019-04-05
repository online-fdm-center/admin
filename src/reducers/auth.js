import {
  TEST_LOGIN,
  TEST_LOGIN_FAILED,
  TEST_LOGIN_SUCCESS,
  UNLOGIN
} from '../actions/auth'

const initialState = {
  token: localStorage.getItem('x-admin-token'),
  status: null
}

function authReducer(state = initialState, action) {
  switch (action.type) {
  case TEST_LOGIN:
    return {...state, status: TEST_LOGIN}
  case TEST_LOGIN_FAILED:
    return {...state, status: TEST_LOGIN_FAILED, token: null}
  case TEST_LOGIN_SUCCESS:
    return {...state, status: null, token: action.token}
  case UNLOGIN:
    return {...state, status: null, token: null}
  default:
    return state
  }
}

export default authReducer