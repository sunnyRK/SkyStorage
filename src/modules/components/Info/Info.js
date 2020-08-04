const Info = ({
  metamaskAddress,
  filecoinBalance,
  addrsList,
  handleState,
  info,
}) => (
  <div className="info">
    <div className="account-details card">
      <div className="metamask-address details-content">
        <label className="heading">Metamask Address</label>
        <div className="address">{metamaskAddress || '0x55E73A69B2315A6e7192af118705079Eb1dB2184'}</div>
      </div>
      <div className="filecoin-address details-content">
        <label className="heading">Filecoin Address</label>
        <div className="address">{(addrsList.length > 0 && addrsList[0] && addrsList[0].name) || 'Initial Address'}</div>
        <div className="address">{(addrsList.length > 0 && addrsList[0] && addrsList[0].addr) || 't3te...'}</div>
      </div>
      <div className="filecoin-balance details-content">
        <label className="heading">Filecoin Balance</label>
        <div className="address">{(
          info && info.balance && info.balancesList.length > 0
          && info.balancesList[0] && info.balancesList[0].balance
          ) || '0 FIL'}</div>
      </div>
    </div>
    <div className="add-file">
    <div class="add-file-wrapper">
      <label class="add-file-label" onClick={() => handleState({ isAddFileOpen: true })}>Add file</label>
    </div>
    </div>
  </div>
);

export default Info;
