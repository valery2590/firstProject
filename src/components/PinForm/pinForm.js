import "./PinForm.css";
import { useState } from "react";

const PinForm = () => {
  const [title, setTitle] = useState();
  const [select, setSelect] = useState();

  const body = {
    author: 1,
    title: title,
    collaborators: [],
  };

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "content.Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:5000/api/boards", options)
      .then((response) => console.log(response))
      .then((json) => console.log(json));
  };

  return (
  <div>
    <p className="form__title">Create Pin</p>
  <form className="form__container">
    <div className="form_inputs">
      <label className="input_label">Title</label>
      <input type="text"
          name="title"
          placeholder="Add a title"
          className="input_title_container"
          onChange={(e) => setTitle(e.target.value)}
       />
    </div>
    <div className="form_inputs"> 
    <label className="input_label">URL Link</label>
      <input type="text"
         type="text"
         name="url_link"
         placeholder="Add a URL to your pin"
         className="input_title_container"
         onChange={(e) => setTitle(e.target.value)}
       />
    </div>
    <div className="form_inputs">
    <label className="input_label">Describe your pin</label>
      <input type="text"
         type="text"
         name="describe_pin"
         placeholder="Describe what your pin is about"
         className="input_title_container"
         onChange={(e) => setTitle(e.target.value)}
       />
    </div>
    <div className="form_inputs">
    <label className="input_label">Board</label>
      <input type="text"
           type="text"
           name="board"
           placeholder="Select to which board you want to add the pin"
           className="input_title_container"
           onChange={(e) => setTitle(e.target.value)}
       />
    </div>
    <div className="form_button_container">
    <button onclick="handleSubmit" type="submit" className="button_form">
      {" "}
      Create
    </button>
    </div>
    </form>
  </div>
  )};
 
export default PinForm;