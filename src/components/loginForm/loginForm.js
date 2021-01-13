import "./loginForm.css";

const LoginForm = () =>{
    return (
        <div className ="login__container">
            <div className="login_title">
                <span className="title">Sign in</span>
            </div>
            <form className="form__container">
                <input type="text" className="input_field" placeholder="Insert your email"/>
                <input type="password" className="input_field" placeholder="Insert your password"/>
            </form>
            <div className="signUp_container"> 
                <span className="title">No account, sign up</span>
                <button type="submit" onClick="" className="button_signUp">Sign up </button>
            </div>
        </div>
)}

export default LoginForm; 