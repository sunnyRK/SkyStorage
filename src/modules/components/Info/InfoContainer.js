import Info from './Info';
import { _uploadToFilecoin, _handleInfo, _handleCreateToken, _setToken } from '../../utils';

class InfoContainer extends React.Component {
  state = {
    addrsList: [],
    value: '',
    info: {},
    infoLoading: false,
  };

  async componentDidMount() {
    this.setState({ infoLoading: true });
    const filecoinToken = await _handleCreateToken();
      _setToken(filecoinToken);
    const { addrsList, info } = await _handleInfo();
    this.setState({ addrsList, info, infoLoading: false });
  }

  render() {
    const { handleState } = this.props;
    const { addrsList, info, infoLoading } = this.state;
    return (
      <Info
        addrsList={addrsList}
        handleState={handleState}
        info={info}
        infoLoading={infoLoading}
      />
    )
  }
}

export default InfoContainer;
