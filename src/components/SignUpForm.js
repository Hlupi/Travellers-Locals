import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from '../reducers/account';


const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jelena',
  lastName: 'Medenica',
  age: '31',
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.',
};
const cities = ['Amsterdam', 'Berlin', 'Brussels', 'Paris', 'Stockholm'];

let SignUpForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => load(data)}>Load Account</button>
      </div>

      {/*//name*/}
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>

      {/*//age*/}
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>

      {/*//traveller*/}
      <div>
        <label>Who you are?</label>
        <div>
          <label>
            <Field name="isTraveller" component="input" type="checkbox" value="traveller" />
            {' '}
            Traveller
          </label>
          {/*// <label>
          //   <Field name="isLocal" component="input" type="checkbox" value="traveller" />
          //   {' '}
          //   Local
          // </label>*/}
        </div>
      </div>

      {/*//cities*/}
      <div>
        <label>Pick your city</label>
        <div>
          <Field name="city" component="select">
            <option value="">Select a city...</option>
            {cities.map(city => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </Field>
        </div>
      </div>

      {/*//interest*/}
      <div>
        <label htmlFor="interest">Interests</label>
        <div>
          yoga: <Field name="yoga" component="input" type="checkbox" value="yoga" />
          food: <Field name="food" component="input" type="checkbox" value="food" />
          drinking: <Field name="drinking" component="input" type="checkbox" value="drinking" />
          sport: <Field name="sport" component="input" type="checkbox" value="sport" />
          museum: <Field name="museum" component="input" type="checkbox" value="museum" />
          coffee: <Field name="coffee" component="input" type="checkbox" value="coffee" />
        </div>
      </div>

      {/*//interest*/}
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>

      {/*//submit*/}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SignUpForm = reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
})(SignUpForm);

// You have to connect() to any reducers that you wish to connect to yourself
SignUpForm = connect(
  state => ({
    initialValues: state.account.data, // pull initial values from account reducer
  }),
  { load: loadAccount }, // bind account loading action creator
)(SignUpForm);

export default SignUpForm;
