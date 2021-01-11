import { useState } from "react";
import "./userMenu.css";

const UserMenu = ({ profile, updateProfile, myBoards, myPins, logOut }) => {
  const [showDropdown, setShowDropDown] = useState(false);

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
            <div className="userDropdown__userfullName">{profile} Profile</div>
            <div className="userDropdown__dropdown__item">{updateProfile} Update Profile</div>
            <div className="userDropdown__dropdown__item">{myBoards} My Boards</div>
            <div className="userDropdown__dropdown__item">{myPins}My pins</div>
            <div className="userDropdown__dropdown__item">{logOut}Log out</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
