import React, { useState, useEffect, createContext, useContext } from "react";
import { AppBar, Button, Stack } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import "../styling/main.css";
import { ThemeContext } from "../App"; // Import the context

function MainNavBar(props) {
  const { navBarBackgroundColor, navBarTextColor } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the context

  const ThemeIcon =
    theme === "dark" ? LightModeOutlinedIcon : DarkModeOutlinedIcon;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change '50' to the scroll threshold you prefer
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* <div id={theme}> */}
      <nav 
        //   className={`main-navbar ${isScrolled ? "translucent-navbar" : ""}`}
        className="main-navbar"
        id={theme}
      >
        {" "}
        <Button
          className="main-navbar-button"
          onClick={toggleTheme} // Add this to toggle the theme
        >
          <ThemeIcon className="home-icon" />
        </Button>
        <Button className="main-navbar-button">App Name</Button>
        <Button className="main-navbar-button">
          <Person2Icon className="home-icon" />
        </Button>
      </nav>
      {/* </div> */}
    </ThemeContext.Provider>
  );
}

export default MainNavBar;
