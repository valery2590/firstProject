import "../App.css";
import BoardList from "../components/boardList/boardList";
import PinsList from "../components/pinList/PinsList";
import { useEffect, useState } from "react";

function HomePage() {
  const [image, setImage] = useState();
  //  const images = async () => {
  //   const res = await fetch(
  //     "https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=yellow+flowers"
  //   );
  //   const data = await res.json();
  //   return data;
  // };
  // images ()
  // .then((newImages) => {
  //   setImage(newImages)
  // })

  useEffect(async ()=> {
    const response = await fetch("https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q")
    const data = await response.json();
    const [item] = data.hits;
    setImage(item);
  }, [])

  return (
    <div className="app__body">
      <div>
        {image && <img src={image.hits}/>}
        {image && <img src={image.webformatURL}/>}
        <p>Welcome to Picturest</p>
   
      </div>
      <button onClick="">Click</button>
      <BoardList />
      <PinsList />
    </div>
  );
}

export default HomePage;
