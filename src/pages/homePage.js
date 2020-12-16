import "../App.css";
import BoardList from "../components/boardList/boardList";
import PinsList from "../components/pinList/pinList";
import UserCard from "../components/userCard/userCard";

function HomePage({user}) {

    return (
        <div className="app__body">
            <UserCard
            avatar={user.avatar}
            userName={user.username}
            followingCount={user.following && user.following.length}
            fullName={`${user.firstName} ${user.lastName}`}/>
            <BoardList/>
            </div>
    )
};


export default HomePage;