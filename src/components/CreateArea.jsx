import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNotes] = useState({
    //- Create a constant that keeps track of the title and content.
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // Pass the new note back to the App.
    props.onAdd(note);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault(); //prevent reloading of the page
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
