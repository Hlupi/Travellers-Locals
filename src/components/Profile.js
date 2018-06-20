import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
    <div className="profile-component">
      <div>
        <p> profile photo </p>
      </div>

      <div>
        <p> Name: </p>
        <p> Age: </p>
        <p> City: </p>
        <p> Country: </p>
      </div>

      <div>
        <p> Interests: lots of them </p>
      </div>

      <div>
        <button> Save button </button>
      </div>

    </div>
    )
  }
}
