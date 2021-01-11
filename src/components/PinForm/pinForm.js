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
  
  <form className="form_container_boardPage">
    <p className="form_title">Create Pin</p>
    <div className="form_input_container">
      <label className="form_label">
        Title </label>
        <input
          type="text"
          name="title"
          placeholder="Add a title"
          className="input_title_container"
          onChange={(e) => setTitle(e.target.value)}
        />
      <label className="form_label">
        URL Link </label>
        <input
          type="text"
          name="url_link"
          placeholder="Add a URL to your pin"
          onChange={(e) => setTitle(e.target.value)}
        />
    </div>
    <div className="form_input_container">
      <label className="form_label">
        Describe your pin</label>
        <input
          type="text"
          name="describe_pin"
          placeholder="Describe what your pin is about"
          onChange={(e) => setTitle(e.target.value)}
        />
      <label className="form_label">
        Board </label>
        <input
          type="text"
          name="board"
          placeholder="Select to which board you want to add the pin"
          onChange={(e) => setTitle(e.target.value)}
        />
     
    </div>
    <button onclick="handleSubmit" type="submit" className="button_form">
      {" "}
      Create
    </button>
</form>
);}


export default PinForm;