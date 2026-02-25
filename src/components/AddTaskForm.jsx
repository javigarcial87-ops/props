import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTask(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddTaskForm;