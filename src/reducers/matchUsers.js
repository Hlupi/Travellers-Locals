import { MATCH_TO_LOCALS, MATCH_TO_TRAVELLERS } from '../actions/newUser'

export default (state = [], action = {}) => {
  switch(action.type) {
    case MATCH_TO_LOCALS:
      const locals = action.payload.person.filter(element => !element.isTraveler)// && element.city === 'Amsterdam')
      return locals

      case MATCH_TO_TRAVELLERS:
        const travellers = action.payload.person.filter(element => element.isTraveler)
        return travellers
  default:
    return state
  }
}
