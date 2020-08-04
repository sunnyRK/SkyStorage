import React, { Component } from 'react';

import Vidoes from './Videos';
import * as System from 'slate-react-system'
import { createPow } from '@textile/powergate-client'
import { getFilecoinInstance } from '../../../../config/contractinstance';
import web3 from '../../../../config/web3';
import { _uploadToFilecoin } from '../../utils';

class VidoesContainer extends Component {
  state = { 
    token: null, 
    info: null, 
    addrsList: [],
    selectedFile: null,
    account: '',
    ipfsHasharray: [],
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

  render() {
    return (
      <Vidoes 
        ipfsHasharray={this.state.ipfsHasharray}
      />
    );
  }
}

export default VidoesContainer;
