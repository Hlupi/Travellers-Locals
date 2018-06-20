import * as React from 'react';

export default class ImageUpload extends React.PureComponent {
  fileSelectedHandler = event => {
    console.log(event.target.files[0])
  }

  render() {
    return (
      <div className="imageUploader">
        <input type="file" onChange={this.fileSelectedHandler}/>
      </div>
    )
  }
}
