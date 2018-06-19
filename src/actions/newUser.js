export const NEW_USER = 'NEW_USER'

export function newUser(data) {
  return {
    type: NEW_USER,
    payload: {
      data
    }
  }
}
