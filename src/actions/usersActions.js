import axios from 'axios'

export const GET_USERS = 'GET_USERS'
export const GET_RU = "GET_RU"

export const getUsers = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user`)
      .then((res) => {
        const array = res.data.slice(0, num)
        dispatch({ type: GET_RU, payload: array })
        dispatch({ type: GET_USERS, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const getRu = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/ru`)
      .then((res) => {
        console.log(res);
        const array = res.data.slice(0, num)
        dispatch({ type: GET_RU, payload: array })
      })
      .catch((err) => console.log(err))
  }
}