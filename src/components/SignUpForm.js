import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from '../reducers/account';
import { Button} from 'react-bootstrap'
import '../styles/SignUpForm.css'

const data = {
  // used to populate "account" reducer when "Load" is clicked
  id: 25,
  name: 'Jelena',
  age: '31',
  employed: true,
  bio: 'Born to write amazing Redux code.',
  isTraveler: true,
  yoga: true,
  drinking: true,
  food: true,
  city: 'Amsterdam',
  url: 'https://thumbs.dreamstime.com/b/westy-puppy-funny-posing-white-background-56504819.jpg'
};
const cities = ['Amsterdam', 'Berlin', 'Brussels', 'Paris', 'Stockholm'];

let SignUpForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Sign up</h2>
        <h3>or</h3>
        <Button type="button" onClick={() => load(data)}>Load Account</Button>
      </div>

      {/*//name*/}
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="name"
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
            <Field name="isTraveler" component="input" type="checkbox" value="traveller" />
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
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </Button>
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
