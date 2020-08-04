import Info from './Info';
import { _uploadToFilecoin, _handleInfo, _handleCreateToken, _setToken } from '../../utils';

class InfoContainer extends React.Component {
  state = {
    addrsList: [],
    value: '',
    info: {},
  };

  async componentDidMount() {
    const filecoinToken = await _handleCreateToken();
      _setToken(filecoinToken);
    const { addrsList, info } = await _handleInfo();
    this.setState({ addrsList, info });
  }

  render() {
    const { handleState } = this.props;
    const { addrsList, info } = this.state;
    return (
      <Info
        addrsList={addrsList}
        handleState={handleState}
        info={info}
      />
    )
  }
}

export default InfoContainer;
