import Button from '@material-ui/core/Button';

const Landing = ({ onRegisterClick, landingLoading }) => (
  <BlockUI
    tag="div"
    blocking={landingLoading}
    loader={<GoogleLoader height={50} width={50} />}
    className="full-screen"
  >
    <div className="landing">
      <Button
        type="submit"
        primary
        className="upload-btn button"
        onClick={onRegisterClick}
      >
        Click Here to Register
      </Button>
    </div>
  </BlockUI>
);

export default Landing;
