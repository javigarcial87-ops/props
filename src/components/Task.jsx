function Task({ id, text, completed, deleteTask, toggleComplete }) {
  return (
    <div className="task">
      <span
        onClick={() => toggleComplete(id)}
        style={{
          textDecoration: completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {text}
      </span>

      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}

export default Task;