import { FOLLOW_USER, GET_USER_BY_ID, UNFOLLOW_USER } from "../actions/userActions";

const initialState = {}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USER_BY_ID:
      return action.payload
    case FOLLOW_USER:
      return {
        ...state,
        following: [action.payload.idToFollow, ...state.following]
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(
          (id) => id !== action.payload.idToUnfollow
        )
      }
    default: 
      return state
  }
}