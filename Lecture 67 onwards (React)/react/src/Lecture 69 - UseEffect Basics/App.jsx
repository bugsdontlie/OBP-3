import { useState } from "react";
import { useEffect } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";

function App() {
  const [todos, setTodos] = useState([]);
  const [showTimer, setShowTimer] = useState(false);

  //Mounting Phase
  useEffect(() => {
    //something written here will run when the component is loaded in DOM
  }, []);

  //unMounting Phase
  useEffect(() => {
    //something written here will still run on mounting

    return () => {
      //this will run while unmounting
    };
  }, []);

  //Updation Phase
  useEffect(() => {
    //something written here will run only when todos will be updated
  }, [todos]);

  return (
    <>
      <Todos />

      <button onClick={() => setShowTimer(!showTimer)}>
        {!showTimer ? "Show Timer" : "Hide Timer"}
      </button>
      {showTimer ? <Timer /> : null}
    </>
  );
}

export default App;
