import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import Signin from "./Signin";
import Footer from "./Footer";
import Note from "./Note";
import Contact from "./Contact";
import SignUp from "./SignUp";
import Donate from "./Donate";
import Register from "./Register";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Router>
      <div>
        {location.pathname === "/" && <Header />}
        {/* <Footer /> */}
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route
            path="/"
            element={
              <>
                <Note />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
