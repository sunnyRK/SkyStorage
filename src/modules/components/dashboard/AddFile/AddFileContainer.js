import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { toast } from 'react-toastify';

import AddFile from './AddFile';
import { _uploadToFilecoin, getDefaultStorageConfig, setDefaultStorageConfig } from '../../../utils';

class AddFileDialogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'both',
    };
  }

  _handleSubmit = async (data) => {
    try {
      const { value } = this.state;
      const { defaultStorageConfig } = await getDefaultStorageConfig();
      const storageConfig = {
        ...defaultStorageConfig,
        cold: {
          ...defaultStorageConfig.cold,
          enabled: value === 'both' ? true : (value === 'filecoin' ? true : false )
        },
        hot: {
          ...defaultStorageConfig.hot,
          enabled: value === 'both' ? true : (value === 'ipfs' ? true : false )
        },
      };
      await setDefaultStorageConfig(storageConfig);
      await _uploadToFilecoin(data);
      this.props.handleState({ isAddFileOpen: false });
      toast.success('File Successfully Uploaded' ,{
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
        console.log('error=====', error);
        toast.success('Something went wrong! Please try again later.' ,{
          position: toast.POSITION.TOP_RIGHT,
        });
    }
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value});
  };

  render() {
    return (
      <Dialog
        className="custom-dialog custom-content-style"
        classes={{
          paperScrollPaper: 'paper-scroll-paper'
        }}
        open={this.props.openDialog}
        onEscapeKeyDown={() => this.props.handleState({ isAddFileOpen: false })}
      >
        <DialogTitle className="dialog-title">
          Add File
          <IconButton
            onClick={() => this.props.handleState({ isAddFileOpen: false })}
          >
            <CloseIcon />
          </IconButton>  
        </DialogTitle>
        <DialogContent className="dialog-content">
          <AddFile
            _handleSubmit={this._handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value}  
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default AddFileDialogContainer;
