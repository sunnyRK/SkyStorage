
const MainTemplate = ({ children, metamaskAddress }) => (
  <div className="main-template">
    <div className="main-header">
      <div className="app-name">AavePod</div>
      <div className="metamask-address">{metamaskAddress}</div>
    </div>
    <div className="main-content">
      {children}
    </div>
    <div className="main-footer">
    </div>
  </div>
);

export default MainTemplate;
