import { useState, useEffect, useRef } from "react";

const ToDoForm = (props) => {
    const  [input, setInput] = useState("");

    const inputRef = useRef(null)

    useEffect(()=>{
      inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random()*1000),
        text: input
    });

    setInput("")
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        type="text"
        name="text"
        placeholder="Enter task..."
        onChange = {handleChange}
        ref={inputRef}
      />
      <button>Add Task</button>
    </form>
  );
};

export default ToDoForm;
