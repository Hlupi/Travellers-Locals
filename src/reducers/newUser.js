import { person } from './users'
import { NEW_USER } from '../actions/newUser'

const initialState = person;

export default (state = initialState, action = {}) => {
  switch(action.type) {
  case NEW_USER:
    return [...state, action.payload.data]

  default:
    return state
  }
}
