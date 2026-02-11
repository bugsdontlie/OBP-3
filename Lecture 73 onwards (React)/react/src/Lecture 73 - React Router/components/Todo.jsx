import { useParams } from "react-router-dom";

function Todo({ todos }) {
  const { id } = useParams();
  return (
    <>
      <h1>{todos[id - 1].title}</h1>
      <p>{todos[id - 1].description}</p>
    </>
  );
}

export default Todo;
