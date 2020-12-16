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
        /*
        <div className="userMenu_list">
        <ul className="userMenu_list_info">
            <li><a><img src="" /></a></li>
            <li><a>{profile}</a></li>
            <li><a>{updateProfile}</a></li>
            <li><a>{myBoards}</a></li>
            <li><a>{myPins}</a></li>
            <li><a>{logOut}</a></li>
        </ul>
    </div>
*/
        )
}

export default UserMenu;