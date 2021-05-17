import { GET_USER_CHANNEL } from "../actions/userActions";

const initialState = {}

export default function userChannelReducer(state = initialState, action) {
  switch(action.type){
    case GET_USER_CHANNEL:
      return action.payload
    default:
      return state
  }
}