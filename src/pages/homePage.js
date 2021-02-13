import "../App.css";
import BoardList from "../components/boardList/boardList";
import PinsList from "../components/pinList/PinsList";
import { React, useEffect, useState } from "react";

function HomePage() {
  const [formData, setFormData] = useState("");

  const [search, setSearch] = useState();
  const [response, setResponse] = useState({ hits: [] });
  const [isError, setIsError] = useState(false)

  const busqueda = (e) => {
    setFormData(e.target.value);
  };

  // API Rick & Morty
  // const [res , setRes] = useState({results:[]})
  // useEffect ( () =>{
  // const fetchData = async () => {
  //   const res =  await fetch (`https://rickandmortyapi.com/api/character`);
  //   const data2 = await res.json();
  //   console.log(data2);
  //   setRes(data2);
  // }
  // fetchData();
  // }, []);

  useEffect(() => {
    const getpicture = async () => {
      setIsError(false)
      try{
      const response = await fetch(
        `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${formData}&per_page=200`
      );
      const data = await response.json();
      setResponse(data);
    }
    catch (error) {
      setIsError(true)
    }
    };
    getpicture();
  }, [search]);

  return (
    <div className="app__body">
      <p>Welcome to Picturest 😄</p>
      <p>{formData}</p>
      <input
        type="text"
        placeholder="select your option"
        value={formData}
        onChange={busqueda}
      />
      <button onClick={() => setSearch(formData)}>Search</button>
      {isError && <div>Something went wrong...</div>}
      <div>
        {response.hits.map((datos) => {
          return <img key={datos.id} src={datos.previewURL} />;
        })}
      </div>

    </div>
  );
}

export default HomePage;
