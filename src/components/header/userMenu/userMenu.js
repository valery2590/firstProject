import { useState } from "react";
import { useHistory } from "react-router";
import "./userMenu.css";

const UserMenu = ({ profile, updateProfile, myBoards, myPins, logOut }) => {
  const [showDropdown, setShowDropDown] = useState(false);
  const history = useHistory();

  return (
    <div className="useDropdown__container">
      
      <div className="userDropdown_anchor" onClick={() => setShowDropDown(!showDropdown)}>
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="user_image_menu"
          className="userAvatar_container"
         
        />
       
      </div>

      {showDropdown && (
        <div  className="userDropdown__dropdown">
            <div className="userDropdown__userfullName" onClick={() =>history.push( "/profile")} >{profile} Profile</div>
            <div className="userDropdown__dropdown__item" onClick={() =>history.push( "/profile")}>{updateProfile} Update Profile</div>
            <div className="userDropdown__dropdown__item" onClick={() =>history.push( "/boards")}>{myBoards} My Boards</div>
            <div className="userDropdown__dropdown__item" onClick={() =>history.push( "/pinsform")}>{myPins}My pins</div>
            <div className="userDropdown__dropdown__item" onClick={() =>history.push( "/")}>{logOut}Log out</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
