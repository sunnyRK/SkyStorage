import React, { Component } from 'react';
import { Player } from 'video-react';
import Button from '@material-ui/core/Button';
import { CreateFilecoinStorageDeal } from "slate-react-system";

const videoUrls = [
  {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
]

const Videos = ({ 
    _handleSubmit, onFileChange, ipfsHasharray
   }) => (
  <div className="videos">
    <div className="videos-header">
      <h3>Videos</h3>
      {/* <input type="file" onChange={onFileChange} />  */}
      {/* <Button
        type="submit"
        primary
        className="upload-btn"
        onClick={_handleSubmit}
      > 
        Upload Video
      </Button> */}
      <CreateFilecoinStorageDeal onSubmit={_handleSubmit} />;

    </div>
    <div className="videos-content">
      {

        ipfsHasharray.map(name => (
          <video 
            controls 
            src={"https://gateway.ipfs.io/ipfs/"+name}
            className="video-player"
          />
        ))
      }
    </div>
  </div>
);

export default Videos;
