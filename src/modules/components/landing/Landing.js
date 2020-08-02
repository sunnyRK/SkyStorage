import Button from '@material-ui/core/Button';

const Landing = ({ onRegisterClick }) => (
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
);

export default Landing;
