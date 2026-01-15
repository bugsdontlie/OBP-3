import "./App.css";
import Display from "./components/Display";
import Card from "./components/Card";

function App() {
  /* const ele = <p className="para">Hi this is Vaibhav</p>;
  React.createElement("p", null,  )
  {
    type: "p",
    props:{

    }
  } */
  return (
    <>
      <div className="card">
        <Display name="Pratik" />
        <Card theme="dark" />
        <Card theme="light" />
      </div>
    </>
  );
}

export default App;
