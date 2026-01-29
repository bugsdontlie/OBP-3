import { useState } from "react";

function AddTodo({ setTodos }) {
  const [todo, setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          placeholder="What's on your mind today?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodo;
