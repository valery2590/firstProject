import "../App.css";
import BoardList from "../components/boardList/boardList";
import UserCard from "../components/userCard/userCard";
import PinsList from "../components/pinList/PinsList";


function HomePage({ user }) {
  return (
    <div className="app__body">
     
      <div>
        <p>Welcome to Picturest</p>
      </div>
      <BoardList />
      <PinsList/>
    </div>
  );
}

export default HomePage;
