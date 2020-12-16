import "./BoardForm.css";
import { useState } from "react";



const BoardForm = () => {

    const [title, setTitle] = useState();
    const [select, setSelect] = useState();

    const body = {
        author: 1,
        title:title,
        collaborators: []
    }

    const handleSubmit = ()=>{
      const options = {
            method: "POST",
            headers: {
                "content.Type": "application/json"
            },
            body: JSON.stringify(body)
      }
        fetch("http://localhost:5000/api/boards", options)
        .then(response => console.log(response))
        .then(json => console.log(json));
    }


    return (
        <form className="form_container">
            <span className="form_title">Create Board</span>
            <br></br>   
            <label>
                Name
                <br></br>
            <input  type="text" name="name"  placeholder="Places to go or even 'my fav recipes'" className="input_name_container" onChange={(e)=> setTitle(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Description
                <br></br>
            <input  type="text" name="description" placeholder="Describe this board" onChange={(e)=> setTitle(e.target.value)}/>
            </label>
            <br></br>
            <select onChange={(e) => setSelect(e.target.value)}>
                <option value="id">id</option>
                <option value="jaja">jaja</option>
                <option value="quetal">quetal</option>
            </select>
            <br></br>
            <button onclick="handleSubmit" type="submit"> Enviar</button>
        </form>

    )
}

export default BoardForm;