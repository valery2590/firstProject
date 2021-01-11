import "./BoardForm.css";
import { useState } from "react";

const BoardForm = () => {
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
    <form className="form_container">
      <p className="form_title">Create Board</p>
      <div className="form_items">
        <label className="form_label">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Places to go or even 'my fav recipes'"
          className="input_name_container"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form_label">Description </label>
        <input
          type="text"
          name="description"
          placeholder="Describe this board"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button onclick="handleSubmit()" type="submit" className="button_form">
        {" "}
        Create
      </button>
    </form>
  );
};

export default BoardForm;
