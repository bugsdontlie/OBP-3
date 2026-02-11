import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

function App() {
  const todos = [
    {
      id: 1,
      title: "lkfjf kefefiehfi efkue foef",
      description:
        "dkjfnje hfkekf hueyfu yefu yeufyueyifyieufiyugshbcnb jduivhg7w",
    },
    {
      id: 2,
      title: "lkfjf kefefiehfi efkue foef",
      description:
        "dkjfnje hfkekf hueyfu yefu yeufyueyifyieufiyugshbcnb jduivhg7w",
    },
    {
      id: 3,
      title: "lkfjf kefefiehfi efkue foef",
      description:
        "dkjfnje hfkekf hueyfu yefu yeufyueyifyieufiyugshbcnb jduivhg7w",
    },
  ];
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  function redirectToTodos() {
    //your logic of adding a todo and now you want to see all todos
    navigate("/todos");
  }

  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/add"> Add Todo </Link>
      </nav>
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Login />} />
        <Route path="/todos" element={<Todos todos={todos} />} />
        <Route path="/todos/:id" element={<Todo todos={todos} />} />
      </Routes>

      <h3>{loggedIn ? "Logged In" : "Logged Out"}</h3>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      <button onClick={() => setLoggedIn(false)}>Log out</button>

      <button onClick={redirectToTodos}>Redirect to /todos</button>
    </>
  );
}

export default App;
