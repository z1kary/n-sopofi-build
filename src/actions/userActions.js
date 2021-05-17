import axios from 'axios'

export const GET_USER_BY_ID = 'GET_USER_BY_ID'
export const DELETE_USER = 'DELETE_USER'
export const GET_USER_BY_TOKEN = 'GET_USER_BY_TOKEN'
export const GET_USER_CHANNEL = 'GET_USER_CHANNEL'
export const FOLLOW_USER = 'FOLLOW_USER'
export const UNFOLLOW_USER = 'UNFOLLOW_USER'
export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR'

export const getUserById = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
      .then((res) => {
        dispatch({ type: GET_USER_BY_ID, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    return axios
      .delete(`${process.env.REACT_APP_API_URL}api/user/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_USER, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const getUserByToken = (token) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/token/${token}`)
      .then((res) => {
        dispatch({ type: GET_USER_BY_TOKEN, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const getUserChannel = (username) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/channel/${username}`)
      .then((res) => {
        dispatch({ type: GET_USER_CHANNEL, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
      data: { idToFollow }
    })
      .then((res) => {
        dispatch({ type: FOLLOW_USER, payload: { idToFollow }})
      })
      .catch((err) => console.log(err))
  }
}

export const unfollowUser = (followerId, idToUnfollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
      data: { idToUnfollow }
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow }})
      })
      .catch((err) => console.log("error unfollow user " + err))
  }
}

export const toggleSideBar = (token) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/togglesidebar/` + token
    })
      .then((res) => {
        dispatch({ type: TOGGLE_SIDE_BAR, payload: res.data })
      })
      .catch((err) => console.log(err))
  }
}