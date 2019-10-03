import React, { Component } from 'react';
import CustomDropzone from "./dropzone";
import { buildImageSecureUrl } from '../lib/common';
export class DropzoneHOC extends Component {

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
    let { image } = this.props;
    if (image !== undefined && image !== null && image.includes(' ')){
      image = buildImageSecureUrl(image);
    } 
    
    return (
      <CustomDropzone
        onPreviewDrop={this.onPreviewDrop}
        image = { image }
      />
    );
  }
}

export default DropzoneHOC;
