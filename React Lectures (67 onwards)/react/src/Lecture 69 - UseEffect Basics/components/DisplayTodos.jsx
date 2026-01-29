function DisplayTodos({ todos }) {
  return (
    <>
      {todos.map((item, ind) => {
        return <p key={ind}>{item}</p>;
      })}
    </>
  );
}

export default DisplayTodos;
