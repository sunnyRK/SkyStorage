import React from 'react';
import Button from '@material-ui/core/Button';
import Gallery from 'react-photo-gallery';

import ImageUploader from './ImageUploader';

const photos = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9UTQq_YJoXl-Ah_JqL7AChU_q_iSWFilGCQ&usqp=CAU',
  },
  {
    src: 'https://hub.textile.io/ipfs/QmdPdxVMGaTyZAtb1CcvssYEopJsuHv54Kyp5WZZSk5h64',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRATKq5nLXe75TESdp1DjiSl9BezG-P3e16KA&usqp=CAU',
  },
];

const Images = ({ onUploadClick, onImageChange }) => (
  <div className="images">
    <div className="images-header">
      <h3>Images</h3>
      <Button
        type="submit"
        primary
        className="upload-btn"
        onClick={onUploadClick}
      > 
        Upload Image
      </Button>
    </div>
    <div className="images-content">
      <input type="file" name="image" onChange={onImageChange}/>
      <button onClick={onUploadClick}>Upload</button>
      <Gallery photos={photos} />
    </div>
  </div>
);

export default Images;
