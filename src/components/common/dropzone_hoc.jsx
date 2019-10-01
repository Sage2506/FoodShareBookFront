import React, { Component } from 'react';
import CustomDropzone from "./dropzone";

export class DropzoneHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image : null
    }
  }

  onPreviewDrop = (acceptedFiles) => {
    const reader = new FileReader()
    reader.onloadend = ev => {
      this.setState({
        image : reader.result
      })
      this.props.onImageSelected(reader.result);
    }
    reader.readAsDataURL(acceptedFiles[0])
  }

  render() {
    let { image } =this.state;
    return (
      <CustomDropzone
        onPreviewDrop={this.onPreviewDrop}
        image = { image }
      />
    );
  }
}

export default DropzoneHOC;
