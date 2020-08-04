import React from 'react';

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

const Videos = ({ ipfsHasharray }) => (
  <div className="videos card">
    <div className="videos-header">
      <h3>Your Videos</h3>
    </div>
    <div className="videos-content">
      {
        ipfsHasharray.length > 0 ? (
          ipfsHasharray.map(name => (
            <video 
              controls 
              src={"https://gateway.ipfs.io/ipfs/"+name}
              className="video-player"
            />
          ))
        ) : (
          <p className="no-content">You haven't uploaded videos yet</p>
        )
      }
    </div>
  </div>
);

export default Videos;
