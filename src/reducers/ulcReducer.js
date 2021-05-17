import { GET_USER_BY_TOKEN, TOGGLE_SIDE_BAR } from "../actions/userActions"

const initialState = {}

export default function ulcReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USER_BY_TOKEN:
      return action.payload
    case TOGGLE_SIDE_BAR:
      return action.payload
    default:
      return state
  }
}