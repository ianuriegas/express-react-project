import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Users from "./pages/Users";
import Topics from "./pages/Topics";
import MainNavBar from "./components/MainNavBar";
import TopicPage from "./pages/TopicPage";
import topicsData from "./data/data.json"
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
        <BrowserRouter>
          <MainNavBar />
          {/* <Router> */}
          <Routes>
            <Route path="/" element={<Topics theme={theme} topicsData={topicsData} />} />
            <Route path="/users" element={<Users theme={theme} />} />
            <Route
              path="/topics/:topicName"
              element={<TopicPage theme={theme} />}
            />
          </Routes>
          {/* </Router> */}
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
