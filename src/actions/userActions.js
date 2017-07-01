import axios from 'axios'

export function fetchUser () {
  return function (dispatch) {
    axios.get('http://127.0.0.1:1818/users')
      .then((response) => {
        dispatch({type: 'FECTH_USER_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FECTH_USER_REJECTED', payload: err})
      })
  }
}

export function setUserName (name) {
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}
