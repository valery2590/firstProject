import "./userCard.css";

const UserCard = ({ avatar, userName, fullName, followingCount }) => {
  return (
    <div className="userCard__container">
      <img
        src="https://thispersondoesnotexist.com/image" alt="user Avatar" className="userCard__image"/>

      <div className="userCard_info__container">
        <span className="userCard_info__userFullname__text">{fullName}</span>
        <br></br>
        <span className="userCard_info__username__text">{'@'+userName}</span>
        <br></br>
        <span className="userCard_info__userFollowing__text">{followingCount} following</span>
      </div>
    </div>
  );
};

export default UserCard;
