import React, { Component } from 'react';
import { Player } from 'video-react';
import Button from '@material-ui/core/Button';

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

const Videos = ({ onUploadVideoClick }) => (
  <div className="videos">
    <div className="videos-header">
      <h3>Videos</h3>
      <Button
        type="submit"
        primary
        className="upload-btn"
        onClick={onUploadVideoClick}
      > 
        Upload Video
      </Button>
    </div>
    <div className="videos-content">
      {
        videoUrls.map(url => (
          <video 
            controls 
            src={url.src}
            className="video-player"
          />
        ))
      }
    </div>
  </div>
);

export default Videos;
