import "./App.css";
import Header from "./components/header/header";
import UserCard from "./components/userCard/userCard";
import Button from "./components/header/button/button";
import UserMenu from "./components/header/userMenu/userMenu";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import BoardList from "./components/boardList/boardList";
import BoardCard from "./components/BoardCard/BoardCard";
import BoardForm from "./components/BoardForm/BoardForm";
//import HomePage from './pages/homePage';
//import UserProfilePage from './pages/userProfilePage';
//import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  //const history = useHistory();
  /*
  const [user, setUser] = useState ({});

  useEffect(() => {
    fetch = (`http://localhost:5000/api/users/1`)
    .then ((response) => response.json())
    .then ((json) => setUser(json));

  }, [] );
  */
  return (
    <div className="app_body">
      <div className="app_header">
        <div>
          <Header />
        </div>
        <div>
          <Button />
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
      <br></br>
      <div className="app_userCard">
          <UserCard
            avatar=""
            userName="johnDoe"
            followingCount={14}
            fullName="John Doe"/>
        </div>
        <br></br>
        <div className="boards_container">
          <BoardCard />
        <div className="form_body">
          <BoardForm />
        </div>
        </div>
    </div>
  );
}

export default App;
