import { MATCH_TO_LOCALS } from '../actions/newUser'

export default (state = [], action = {}) => {
  switch(action.type) {
  // case MATCH_USERS:
  //   const newState = [...state]
  //   const lastUser = newState.pop()
  //
  //   const locals = newState.filter(element => !element.isTraveler)
  //   return travellers;
  case MATCH_TO_LOCALS:
    const locals = action.payload.person.filter(element => element.isTraveler)
    return locals;
  // case MATCH_TO_TRAVELLERS:
  //     const travellers = newState.filter(element => !element.isTraveler)
  //     return travellers
  default:
    return state
  }
}
