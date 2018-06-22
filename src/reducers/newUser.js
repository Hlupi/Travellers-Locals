import { NEW_USER } from '../actions/newUser'

//const initialState = person;

export default (state = {}, action = {}) => {
  switch(action.type) {
  case NEW_USER:
    return action.payload.data
  default:
    return state
  }
}
