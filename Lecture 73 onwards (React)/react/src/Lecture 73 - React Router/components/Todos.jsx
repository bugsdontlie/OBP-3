import { Link } from "react-router-dom";

function Todos({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Link to={"/todos/" + todo.id}>
              <h2>{todo.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Todos;
