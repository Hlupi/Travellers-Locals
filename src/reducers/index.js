import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import account from './account';
import newUser from './newUser'

export default combineReducers({
  account,
  form: reduxFormReducer,
  newUser
})
