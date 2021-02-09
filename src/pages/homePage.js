import "../App.css";
import BoardList from "../components/boardList/boardList";
import PinsList from "../components/pinList/PinsList";
import Axios from "axios"
import { useState } from "react";


function HomePage() {

const [image, setImage] = useState("");
  const images = ()=>{
    Axios.get(`https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q`)
    .then ((response) => {console.log(response);
    setImage(response.data.hits)
    }
    
    
    )
  }
 
  return (
    <div className="app__body">
   
      <div>
        <p>Welcome to Picturest</p>
        {images}
      </div>
      <button onClick={images}>Click</button>
      <BoardList />
      <PinsList/>
    </div>
  );
}

export default HomePage;
