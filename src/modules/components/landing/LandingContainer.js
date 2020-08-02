import { Component } from 'react';
import { withRouter } from 'next/router';
import { toast } from 'react-toastify';

import Landing from './Landing';
import { getFilecoinInstance } from '../../../../config/contractinstance';
import { _handleCreateToken, _setToken, _handleInfo } from '../../utils';

class LandingContainer extends Component {
  async componentDidMount() {
    // const isUserRegistered = await getFilecoinInstance.methods.isUserRegistered().call();
    const isUserRegistered = false;
    if (isUserRegistered) {
      this.props.router.push('/dashboard');
    }
  }

  onRegisterClick = async () => {
    const filecoinToken = await _handleCreateToken();
    _setToken(filecoinToken);
    const { addrsList, info } = await _handleInfo();
    // const accounts = await web3.eth.getAccounts();
    // await getFilecoinInstance.methods
    //   .registerUser(filecoinToken, addrsList[0].addr)
    //   .send({ from: accounts[0] });
    this.props.router.push('/dashboard');
    toast.success('Successfully registered', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  render() {
    return (
      <Landing
        onRegisterClick={this.onRegisterClick}
      />
    )
  }
}

export default withRouter(LandingContainer);
