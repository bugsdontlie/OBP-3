import { Routes, Route, Link } from "react-router-dom";

import { useState, useContext } from "react";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import DashboardLayout from "./components/DashboardLayout";
import About from "./components/About";
import Contact from "./components/Contact";

import { useTheme, ThemeContext } from "./context/ThemeContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      {/* <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        /> */}

      {/* /contact/instructor
        /contact/finance
        /contact/ops
        /contact/sales

        <Route path="/contact" element={<ContactLayout />}>
          <Route path="instructor" element={<Instructor />} />
          <Route path="finance" element={<Finance />} />
          <Route path="ops" element={<Ops />} />
        </Route> */}

      {/* <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route> 
      </Routes>*/}
    </>
  );
}

export default App;
