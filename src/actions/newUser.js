//import { person } from '../reducers/users'

export const NEW_USER = 'NEW_USER'
export const MATCH_TO_LOCALS = 'MATCH_TO_LOCALS'

export function newUser(data) {
  return {
    type: NEW_USER,
    payload: {
      data
    }
  }
}

export function matchToLocals(person) {
  return {
    type: MATCH_TO_LOCALS,
    payload: {
      person
    }
  }
}

// export function matchToTravellers() {
//   return {
//     type: MATCH_TO_TRAVELLERS,
//
//   }
// }
