import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Products from "./components/Products";

function App() {
  return (
    <>
      <nav>
        <Link to="/signup"> SignUp</Link>
        <Link to="/products"> Products</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
