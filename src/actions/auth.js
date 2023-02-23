import {
  AuthApi
} from "../api/auth";

import { push } from 'react-router-redux'


// Login
export const LOGIN_REQUEST = '[USER] LOGIN_REQUEST'
export const LOGIN_SUCCESS = '[USER] LOGIN_SUCCESS'
export const LOGIN_FAILURE = '[USER] LOGIN_FAILURE'

export const login = (email, password) => {
  return (dispatch, state) => {
    return AuthApi.login(email, password).then(resp => {
      if (resp.status === 200) {
        return resp.json().then(data => {
          localStorage.setItem('token', data.token);
          dispatch(loginSuccess());
          dispatch(push('/excursions'))
        });
      }

      return resp.json().then(err => {
        dispatch(loginError(err.error))
      })

    }).catch(err => {
      console.log('err', err);
    })
  }
}

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isAuthenticated: true,
      isFetching: false,
    }
  }
}

const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}