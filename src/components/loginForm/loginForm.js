import "./loginForm.css";
import{Link} from "react-router-dom";


const LoginForm = () =>{
    return (
        <div className ="login__container">
            <div className="login_title">
                <span className="title">Sign in</span>
            </div>
            <form className="form__container">
                <input type="text" className="input_field" placeholder="Insert your email"/>
                <input type="password" className="input_field" placeholder="Insert your password"/>
                <button type="submit" onClick=""className="button_signIn"><Link to="/user" className="link_button"   > Sign In</Link></button>
            </form>
            <div className="signUp_container"> 
                <span className="title">No account, sign up!</span>
                <button type="submit" onClick="" className="button_signUp"><Link to="/" className="link_button"> Sign up</Link> </button>
            </div>
        </div>
)}

export default LoginForm; 