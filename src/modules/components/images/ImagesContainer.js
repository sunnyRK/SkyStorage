import React, { Component } from 'react';

import Images from './Images';
import { PowerGate } from '../../utils'

class ImagesContainer extends Component {
  state = {
    image: {},
  };

  onUploadClick = async () => {
    // const { image } = this.state;
    // console.log('image=====', image);
    // // const file = image.file.files[0];
    // var buffer = [];
    // const getByteArray = async () =>
    //   new Promise((resolve) => {
    //     const reader = new FileReader();
    //     reader.onloadend = function(e) {
    //       if (e.target.readyState == FileReader.DONE) {
    //         buffer = new Uint8Array(e.target.result);
    //       }
    //       resolve();
    //     };
    //     reader.readAsArrayBuffer(image);
    //   });
    // await getByteArray();
    // const { cid } = await PowerGate.ffs.stage(buffer);
    // console.log('cid=====', cid);
    // const { jobId } = await PowerGate.ffs.pushStorageConfig(cid);
    // console.log('jobid======', jobId);
    // const cancel = PowerGate.ffs.watchJobs((job) => {
    // console.log('job====', job);
    // }, jobId);
  }

  onImageChange = (e) => {
    e.persist()
    console.log('e====', e);
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  }

  render() {
    return (
      <Images
        onUploadClick={this.onUploadClick}
        onImageChange={this.onImageChange}
      />
    );
  }
}

export default ImagesContainer;
