import './header.css';
import Logo from '../../assets/logo.png';
import { useHistory } from "react-router";
import HomePage from "../../pages/homePage";


const Header = ({ user }) => {
    const history = useHistory()
    return (
        <div className="header__container">
            <div className="header__logo">
                <img src={Logo} alt="Picturest Logo" />
                <div className="button__container" onClick={() => history.push("/")}>
                    Home
            </div>
            </div>
            <div className="header_userInfo__container">
                <img
                 src={user} // src={user.avatar}
                    className="header_userInfo__image"
                    alt="User avatar"/>
            </div>
        </div>
    );
};

export default Header;

