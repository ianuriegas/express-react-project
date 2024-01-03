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
import SingleTopicPage from "./pages/SingleTopicPage";

export const ThemeContext = createContext();

function App() {
  const [topicsData, setTopicsData] = useState({}); // Initialize topicsData state
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.body.className = theme;
  
    fetch("/topics")
      .then((response) => response.json())
      .then((data) => {
        setTopicsData(data); // Assuming your API returns an object
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTopicsData({}); // Set to empty object in case of error
      });
  }, [theme]);
  

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route
            path="/"
            element={<Topics theme={theme} topicsData={topicsData} />}
          />
          <Route path="/users" element={<Users theme={theme} />} />
          <Route
            path="/topics/:topicName"
            element={
              <SingleTopicPage theme={theme} topicsData={topicsData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
