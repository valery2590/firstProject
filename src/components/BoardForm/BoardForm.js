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
            <br></br> 
            <label>
                Name
                <br></br>
                <br></br>
            <input  type="text" name="name"  placeholder="Places to go or even 'my fav recipes'" className="input_name_container" onChange={(e)=> setTitle(e.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <label>
                Description
                <br></br>
                <br></br>
            <input  type="text" name="description" placeholder="Describe this board" onChange={(e)=> setTitle(e.target.value)}/>
            </label>
            <br></br>
            <button onclick="handleSubmit" type="submit" className="button_form"> Create</button>

                        
                        <form className="form_container_boardPage">
                        <span className="form_title">Create Pin</span>
                        <br></br>  
                        <br></br> 
                        <div className="form_input_container">
                        <label>
                            Title
                            <br></br>
                            <br></br>
                        <input  type="text" name="title"  placeholder="Add a title" className="input_title_container" onChange={(e)=> setTitle(e.target.value)}/>
                        </label>
                        <br></br>
                        <br></br>

                        <label>
                            URL Link
                            <br></br>
                            <br></br>
                        <input  type="text" name="url_link" placeholder="Add a URL to your pin" onChange={(e)=> setTitle(e.target.value)}/>
                        </label>
                        <br></br>
                        <br></br>
                        </div>
                        <div className="form_input_container2">
                        <label>
                            Describe your pin
                            <br></br>
                            <br></br>
                        <input  type="text" name="describe_pin" placeholder="Describe what your pin is about" onChange={(e)=> setTitle(e.target.value)}/>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            Board
                            <br></br>
                            <br></br>
                            <input  type="text" name="board" placeholder="Select to which board you want to add the pin" onChange={(e)=> setTitle(e.target.value)}/>
                        </label>
                        </div>
                        <br></br>
                        <button onclick="handleSubmit" type="submit" className="button_form"> Create</button>
        </form>

        </form>

        

    )
}

export default BoardForm;