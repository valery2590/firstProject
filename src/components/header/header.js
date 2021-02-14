import "./header.css";
import Logo from "../../assets/logo.png";
import { useHistory } from "react-router";
import Button from "./button/button";
import UserMenu from "./userMenu/userMenu";
import { Link} from "react-router-dom";

const Header = ({ user }) => {
  const history = useHistory();

  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={Logo} alt="Picturest Logo" onClick={() => history.push("/")}/>
        <div className="button__container" onClick={() => history.push("/")}>
          <Button text="Home" />
        </div>
      </div>

      <div className="header_userInfo__container">
        <div className="button_signIn_container">
          <div ><Link to="/login" className="button_sigIn">Sign In</Link></div>
        </div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
