import React, { Component, Fragment } from 'react';
import Dropzone from "react-dropzone";
import { Image } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
export class CustomDropzone extends Component {
  render() {
    let {
      onPreviewDrop,
      image,
    } = this.props
    return (
      <Paper>
        <Dropzone 
          accept="image/*"
          onDrop={onPreviewDrop}
        >
          {({getRootProps, getInputProps}) => (
            <section className="dropzone dz-clickable" >
              { image === null &&
                <div {...getRootProps()} className="dz-message">
                  <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some images here, or click to select files</p>
                </div>
              }
              { image !== null &&
                <div {...getRootProps()} className="dz-message">
                  <Fragment>
                    <Image
                      alt="Preview"
                      src={image}
                      fluid
                    />
                    <input {...getInputProps()} />
                  </Fragment>
                </div>
              }
            </section>
          )}
        </Dropzone>
      </Paper>
    );
  }
}

export default CustomDropzone;
