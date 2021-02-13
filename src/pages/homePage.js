import "../App.css";
import BoardList from "../components/boardList/boardList";
import PinsList from "../components/pinList/PinsList";
import  { React, useEffect, useState } from "react";

function HomePage() {
  const [formData, setFormData] = useState("Escribe tu busqueda")
  const [respuesta, setRespuesta] = useState({results:[]});
  const [res , setRes] = useState({results:[]})
  const [response, setResponse] = useState({hits:[]});
  


  const busqueda = (e)=>{
    setFormData(e.target.value)
  }


  useEffect(async () => {
    const response = await fetch(`https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=  &per_page=200`);
    const data = await response.json();
    console.log(data);
    setResponse(data);
  }, []); 
console.log(response);



useEffect ( async () => {
  const res =  await fetch (`https://rickandmortyapi.com/api/character`);
  const data2 = await res.json();
  console.log(data2);
  setRes(data2)
}, []);

  return (
    <div className="app__body">
      <p>{formData}</p>
      <input placeholder="select your option" onChange={busqueda}   />
      <div>
        {setRespuesta}
      </div>
      <div>
        {response.hits.map(datos => {
          return <img  key={datos.id} src={datos.previewURL} />;
        })}
      </div>
      <p>Welcome to Picturest 😄</p>
      <div>
        {res.results.map(datos2 =>{
          return <img key ={datos2.id} src={datos2.image}/>;
        })}
      </div>
      <button>Click</button>
      <BoardList />
      <PinsList />
    </div>
  );
}

export default HomePage;
