import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleEvent(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={changeHandler}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeHandler}
          value={note.content}
        />
        <button onClick={handleEvent}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
