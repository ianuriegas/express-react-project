import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Topics from "./pages/Topics";
import MainNavBar from "./components/MainNavBar";

function App() {
  const navBarBackgroundColor = "blue";
  const navBarTextColor = "white";

  return (
    <div>
      <MainNavBar
        navBarBackgroundColor={navBarBackgroundColor}
        navBarTextColor={navBarTextColor}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Topics />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
