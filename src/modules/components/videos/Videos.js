import BlockUI from 'react-block-ui';
import GoogleLoader from '../../shared/GoogleLoader';

const Videos = ({ ipfsHasharray, vidoesLoading }) => (
  <div className="videos card">
    <div className="videos-header">
      <h3>Your Videos</h3>
    </div>
    <BlockUI
      tag="div"
      blocking={vidoesLoading}
      loader={<GoogleLoader height={50} width={50} />}
      className="full-screen"
    >
      <div className="videos-content">
        {
          !vidoesLoading && ipfsHasharray.length === 0 ? (
              <p className="no-content">You haven't uploaded videos yet</p>
            ) : (
            ipfsHasharray.map(name => (
              <video 
                controls 
                src={"https://gateway.ipfs.io/ipfs/"+name}
                className="video-player"
              />
            ))
          )
        }
      </div>
    </BlockUI>
  </div>
);

export default Videos;
