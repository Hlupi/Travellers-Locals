import React, {Component} from 'react'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import '../styles/Preferences.css'

export default class Preferences extends Component {
  render() {
    return (<form>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Who are you?</ControlLabel>
        <FormControl componentClass="select" placeholder="I am a...">
          <option value="I am a...">I am a...</option>
          <option value="Traveller">Traveller</option>
          <option value="Local">Local</option>
        </FormControl>
      </FormGroup>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Find your match</ControlLabel>
        <FormControl componentClass="select" placeholder="Type the location of your match">
          <option value="Type the location of your match">Type the location of your match</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Berlin">Berlin</option>
          <option value="Brussels">Brussels</option>
          <option value="Paris">Paris</option>
          <option value="Stockholm">Stockholm</option>
        </FormControl>
      </FormGroup>
      <FormGroup controlId="formControlsSelect">
        <FormControl componentClass="select" placeholder="Choose interests of your match">
          <option value="Choose interests of your match">Choose interests of your match</option>
          <option value="yoga">Yoga</option>
          <option value="Food">Food</option>
          <option value="Drinking">Drinking</option>
          <option value="Sport">Sport</option>
          <option value="Museum">Museum</option>
          <option value="Coffee">Coffee</option>
        </FormControl>
      </FormGroup>
      <Button type="submit" className="btn btn-outline-secondary btn-block">Save</Button>
    </form>);
  }
}
