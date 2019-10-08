import React, { Component } from 'react';
import CustomDropzone from "./dropzone";
import { buildImageSecureUrl } from '../lib/common';
export class DropzoneHOC extends Component {

  onPreviewDrop = (acceptedFiles) => {
    const reader = new FileReader()
    reader.onloadend = ev => {
      this.createImage(reader.result)
    }
    reader.readAsDataURL(acceptedFiles[0])
  }

  createImage = (src) => {
    let img = document.createElement("img");
    img.addEventListener('load', () => { this.resizeImage (img) });
    img.src = src;
  }

  resizeImage = (img) => {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    debugger
    let MAX_WIDTH = 600;
    let MAX_HEIGHT = 450;
    let width = img.width;
    let height = img.height;
    if(width > MAX_WIDTH || height > MAX_HEIGHT){
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
    }
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    let dataurl = canvas.toDataURL("image/png");
    this.props.onImageSelected(dataurl)
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
