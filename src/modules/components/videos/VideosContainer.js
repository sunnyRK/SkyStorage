import React, { Component } from 'react';

import Vidoes from './Videos';
import * as System from 'slate-react-system'
import { createPow } from '@textile/powergate-client'
import { getFilecoinInstance } from '../../../../config/contractinstance';
import web3 from '../../../../config/web3';
import { _uploadToFilecoin } from '../../utils';

// const pow = createPow({ host: "http://0.0.0.0:6002" });
// pow.setToken('d97214c6-024a-4b3f-aaf6-18c5ff2988f9');


const host = "http://0.0.0.0:6002" // or whatever powergate instance you want

const pow = createPow({ host })

class VidoesContainer extends Component {

  state = { 
    token: null, 
    info: null, 
    addrsList: [],
    selectedFile: null,
    account: '',
    ipfsHasharray: []

  }
   
  componentDidMount = async () => {
    const ipfsHasharray = [];
    const accounts = await web3.eth.getAccounts();
    const hashLength = await getFilecoinInstance().methods.getIpfsHashLength(accounts[0]).call();
    console.log(hashLength)
    for (var i=0; i<hashLength; i++) {
      const hash = await getFilecoinInstance().methods.getIpfsHashByIndex(i, accounts[0]).call();
      ipfsHasharray.push(hash);
    }
    this.setState({
      ipfsHasharray
    });
    console.log(this.state.ipfsHasharray);
  };


  _handleSubmit = async (data) => {
    _uploadToFilecoin(data);
  };

  onFileChange = event => { 
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 

  render() {
    return (
      <Vidoes 
      _handleSubmit={this._handleSubmit}
      onFileChange={this.onFileChange}
      ipfsHasharray={this.state.ipfsHasharray}
      />
    );
  }
}

export default VidoesContainer;
