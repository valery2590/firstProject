import BoardList from "../components/boardList/boardList"
import UserCard from "../components/userCard/userCard"
import BoardForm from "../components/BoardForm/Boardform";

export const UserProfilePage = () => {
    return (
        <div>
         <BoardList/>
        <UserCard/>
        <BoardForm/>
        </div>
    )}

export default UserProfilePage;
