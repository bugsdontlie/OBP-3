import { useState } from "react";
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";
import { useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState(
    (localStorage.getItem("todos") &&
      JSON.parse(localStorage.getItem("todos"))) ||
      [],
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <DisplayTodos todos={todos} />
    </>
  );
}

export default Todos;
