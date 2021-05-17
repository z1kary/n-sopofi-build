import { GET_RU } from "../actions/usersActions";

const initialState = {}

export default function ruReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RU:
      return action.payload
    default:
      return state
  }
}