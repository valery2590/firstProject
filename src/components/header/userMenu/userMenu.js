import './userMenu.css';

const UserMenu = ({profile, updateProfile, myBoards, myPins, logOut})=> {
    return(
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
        )
}

export default UserMenu;