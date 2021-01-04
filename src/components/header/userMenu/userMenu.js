import './userMenu.css';

const UserMenu = ({profile, updateProfile, myBoards, myPins, logOut})=> {
    return(
        <div className="userMenu_list">
            <div className="image_menu_user">
        <img src="https://thispersondoesnotexist.com/image" alt="user_image_menu"  className="image_menu_user"/>
            </div>
            <select className="userMenu_list_info">
                <option>{profile}Profile</option>
                <option>{updateProfile} updateProfile</option>
                <option> {myBoards} My Boards</option>
                <option> {myPins}My pins</option>
                <option>{logOut}Log out</option>
            </select>
        </div>
      
        )
}

export default UserMenu;