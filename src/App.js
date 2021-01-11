import "./App.css";
import Header from "./components/header/header";
import UserCard from "./components/userCard/userCard";
import Button from "./components/header/button/button";
import UserMenu from "./components/header/userMenu/userMenu";
import { useEffect, useState } from "react";
import { Router, useHistory } from "react-router";
import BoardList from "./components/boardList/boardList";
import BoardCard from "./components/BoardCard/BoardCard";
import BoardForm from "./components/BoardForm/BoardForm";
import HomePage from './pages/homePage';
import { UserProfilePage } from "./pages/useProfilePage";
//import UserProfilePage from "./pages/userProfilePage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App =()=> {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/users/1`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  },[]);
  
  return (
    <div className="app__body">
      <BrowserRouter>
        <Header user={user} />
        <Switch>
          <Route path="/boards">
          <BoardPage />
          </Route>
          <Route path="user">
            <UserProfilePage user={user} />
          </Route>
          <Route path="/">
           <HomePage  user={user}/>
        </Route>
        </Switch>
        </BrowserRouter>
     </div>
       
  );

  
}
  
  function BoardPage() {
  return <h2>Home</h2>
}


export default App;
