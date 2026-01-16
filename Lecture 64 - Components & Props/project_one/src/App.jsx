import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Parent from "./components/Parent";

function App() {
  const [tab, setTab] = useState("Home");
  const props = { name: "Prajwal" };
  return (
    <>
      <Parent {...props} />
      <Card child="real children prop" {...props}>
        <h2>Vaibhav</h2>
        <p>I'm living in Pune since 2000</p>
      </Card>
      <Card />

      <button onClick={() => setTab("Home")}>Home</button>
      <button onClick={() => setTab("Contact Us")}>Contact Us</button>
      <button onClick={() => setTab("About Us")}>About Us</button>

      {tab === "Home" ? (
        <Home />
      ) : tab === "About Us" ? (
        <About />
      ) : (
        <ContactUs />
      )}
    </>
  );
}

export default App;
