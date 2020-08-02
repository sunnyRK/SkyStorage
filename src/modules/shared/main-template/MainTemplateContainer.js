import React, { Component } from 'react';
import { createPow } from '@textile/powergate-client'
import { withRouter } from 'next/router';

import MainTemplate from './MainTemplate';
import web3 from '../../../../config/web3';
import NetworkTypeDialogContainer from './NetworkTypeDialog/NetworkTypeDialogContainer';
import { getFilecoinInstance } from '../../../../config/contractinstance';
import { _setToken } from '../../utils';

const PowerGate = createPow({ host: "http://0.0.0.0:6002" });

class MainTemplateContainer extends Component {
  state = {
    displayMessage: '',
    metamaskLoginMessage: '',
    metamaskLoading: false,
    metamaskAddress: '',
  };

  async componentDidMount() {
    let networkType;
    this.setState({ metamaskLoading: true });
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      this.enablewindow();
      this.setState({
        metamaskLoginMessage: 'Connect your metamask account (& reload)',
        metamaskLoading: false,
        metamaskAddress: accounts[0],
      });
    } else {
      const isRegisterUser = await getFilecoinInstance().methods.isRegisterUser(accounts[0]).call();
      if (!isRegisterUser) {
        this.props.router.push('/');
      } else {
        const filecoinToken = await getFilecoinInstance().methods.getFilecoinToken(accounts[0]).call();
        console.log('filecoinToken=====', filecoinToken);
        _setToken(filecoinToken);
        this.props.router.push('/dashboard');
      }
      this.setState({ metamaskAddress: accounts[0], metamaskLoading: false });
    }

    await web3.eth.net.getNetworkType()
      .then((type) => {
        networkType = type;
      });

    if (networkType !== 'kovan') {
      this.setState({
        displayMessage: `Network Error: Change network ${networkType} to kovan`,
      });
    } else {
      this.setState({ displayMessage: '' });
    }
  }

  enablewindow = async () => {
    await window.ethereum.enable();
  }

  render() {
    const { children } = this.props;
    const { displayMessage, metamaskLoginMessage, metamaskAddress } = this.state;
    return (
      <>
        <MainTemplate
          children={children}
          metamaskAddress={metamaskAddress}
        />
        <NetworkTypeDialogContainer
          displayMessage={metamaskLoginMessage || displayMessage}
          openDialog={metamaskLoginMessage || displayMessage}
        />
      </>
    );
  }
}

export default withRouter(MainTemplateContainer);
