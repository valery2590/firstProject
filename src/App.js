import './App.css';
import Header from './components/header/header';
import UserCard from './components/userCard/userCard';
import Button from './components/header/button/button';
import UserMenu from './components/header/userMenu/userMenu';
//import BoardList from './components/boardList/boardList';  
//import BoardForm from './components/BoardForm/BoardForm';



function App() {
  return (
    <div className="app_body">
      <div className="app_header">
          <Header/>
          <Button/>
          <UserMenu/>
      </div>
    <UserCard avatar ="https://images.generated.photos/Umpk1cvGsGZuVs3Wsvwsl_Ki7svIPPQr8Kfy0Yzn1sc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMDgwOTdfMDU1/MjcxM18wMTQ4ODI4/LmpwZw.jpg" 
    userName="johnDoe" followingCount ={14} fullName="John Doe"/>
   
    
  </div>
  );
    
}

export default App;
