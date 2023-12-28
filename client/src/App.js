import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Topics from "./pages/Topics";
import MainNavBar from "./components/MainNavBar";

// Creating the context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark"); // Initial theme state

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <MainNavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Topics theme={theme} />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
