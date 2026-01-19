import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CoinToss from "./components/CoinToss";

function App() {
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <>
      <button
        onClick={() => {
          setView((view) => !view);
        }}
      >
        {!view ? "View" : "Hide"}
      </button>
      {/* {view ? <Card /> : "null"} */}
      {view && <Card />}
      <CoinToss />
    </>
  );
}

export default App;
