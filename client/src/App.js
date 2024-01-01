import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Topics from "./pages/Topics";
import MainNavBar from "./components/MainNavBar";
import TopicPageTemplate from "./pages/TopicPageTemplate";

export const ThemeContext = createContext();

function App() {
  // Check local storage for a saved theme, default to 'dark' if not found
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save new theme to local storage
      return newTheme;
    });
  };

  // Effect to apply the theme on initial load
  useEffect(() => {
    document.body.className = theme; // Or any other logic to apply the theme
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <MainNavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Topics theme={theme} />} />
            <Route path="/users" element={<Users theme={theme} />} />
            <Route
              path="/topic-page-template"
              element={<TopicPageTemplate theme={theme} />}
            />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
