import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayUsers from "./components/DisplayUsers";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Form setUsers={setUsers} />
      <DisplayUsers users={users} />
    </>
  );
}

export default App;
