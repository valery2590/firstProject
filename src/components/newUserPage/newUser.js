import "./newUser.css";

const NewUser = ()=> {
    return(
        <div className="newUser_container">
            <span className="form_newUser_title">We need your information</span>
            <form className="form_newUser_container">
                <input type="text" placeholder="Your Name" className="newUser_input"/>
                <input type="text" placeholder="Your Last Name"className="newUser_input"/>
                {/*<label>Your Birthday</label>*/}
                <input type="date"className="newUser_input"/>               
                <input type="email" placeholder="Your Email"className="newUser_input"/>
                <input type="email" placeholder="Confirm your Email"className="newUser_input"/>
                <input type="password" placeholder="Create your Password"className="newUser_input"/>
                <input type="password" placeholder="Confirm your Password"className="newUser_input"/>
                <button type="submit" className="button_newUser_form">Create New User</button>
            </form>
        </div>
    )
};

export default NewUser