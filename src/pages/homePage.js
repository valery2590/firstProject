import "./homePage.css";
import { React, useEffect, useState } from "react";
import Button from "../components/header/button/button";

function HomePage() {
  const [formData, setFormData] = useState("");
  const [search, setSearch] = useState();
  const [response, setResponse] = useState({ hits: [] });
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState({ hits: [] })

  const busqueda = (e) => {
    setFormData(e.target.value);
  };

  useEffect(() => {
    const getpicture = async () => {
      setIsError(false);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${formData}&per_page=200`
        );
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setIsError(true);
      }
    };
    getpicture();
  }, [search]);

  return (
    <div className="home__container">
      <p className="salute">Welcome to Picturest 😄</p>
      <input
        className="search_input"
        type="text"
        placeholder="select your option"
        value={formData}
        onChange={busqueda}
      />

      <Button
        text="Search"
        onClick={() => setSearch(formData)}
        className="search_button"
      />
      {isError && <div>Something went wrong...</div>}
      <div className="images_container">
        {response.hits.map((datos) => {
          return <div>
            <div><img key={datos.id} src={datos.previewURL} target="_blank"/>
            <p><a key={datos.id} className="link" href={datos.largeImageURL} target="_blank">View Image</a></p>
            </div>
            <p>{datos.tags}</p>
            <div>
              <img key={datos.id} src={datos.userImageURL}className="userImage"/>
              <p>{datos.user}</p></div>
            </div>
          })} 
        
      
          </div>
          



         
   
     
      
    </div>
  );
}

export default HomePage;
