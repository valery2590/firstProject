import "./App.css";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
//import { Router, useHistory } from "react-router";
//import BoardList from "./components/boardList/boardList";
//import BoardCard from "./components/BoardCard/BoardCard";s
import HomePage from './pages/homePage';
import {  UserProfilePage} from "./pages/useProfilePage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BoardForm from "./components/BoardForm/Boardform";
import PinForm from "./components/PinForm/PinForm";
import BoardPage  from "./pages/boardPage";
import LoginPage from "./pages/loginPage";

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
          <Route path="/boardform">
            <BoardForm/>
          </Route>
          <Route path="/pinform">
            <PinForm/>
          </Route>
          <Route path="/login">
          <LoginPage/>
        </Route>
          <Route path="/user">
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
  
 


export default App;
