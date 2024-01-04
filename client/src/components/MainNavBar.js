import React, { useState, useEffect, useContext } from "react";
import { Button, Tooltip } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import "../styling/main.css";
import { ThemeContext } from "../App"; // Import the context
import BlackTransparent from "../images/fiber-high-resolution-logo-black-transparent.png";
import WhiteTransparent from "../images/fiber-high-resolution-logo-white-transparent.png";
import { Link } from "react-router-dom";

function MainNavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the context

  const ThemeIcon =
    theme === "dark" ? LightModeOutlinedIcon : DarkModeOutlinedIcon;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust 50 to the scroll threshold you prefer
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Changes background color 
    const newBackgroundColor =
      theme === "dark" ? "var(--dark-bg)" : "var(--light-bg)";
    document.documentElement.style.backgroundColor = newBackgroundColor;
    document.body.style.backgroundColor = newBackgroundColor;

    // Changes navbar border color
    const navbarBorderColor =
      theme === "dark"
        ? "var(--dark-navbar-border)"
        : "var(--light-navbar-border)";
    document.documentElement.style.setProperty(
      "--navbar-border",
      navbarBorderColor
    );
  }, [theme]);

  const navbarClass = `main-navbar ${isScrolled ? "scrolled" : ""} ${theme}`;

  const logoImage = theme === "dark" ? WhiteTransparent : BlackTransparent;

  const themeButtonClass =
    theme === "dark" ? "Activate Light Mode" : "Activate Dark Mode";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <nav className={navbarClass} id={theme}>
        <div
          className="main-navbar-content"
          // style={{ backgroundColor: "blue" }}
        >
          <Tooltip title={themeButtonClass} className="tooltip">
            <Button className="main-navbar-button" onClick={toggleTheme}>
              <ThemeIcon className="home-icon" />
            </Button>
          </Tooltip>

          <Link to="/users">
            <Tooltip title="View Profile" className="tooltip">
              <Button className="main-navbar-button">
                <Person2Icon className="home-icon" />
              </Button>
            </Tooltip>
          </Link>

          <Link to="/">
            <Tooltip title="Home" className="tooltip">
              <img src={logoImage} className="nav-logo" />
            </Tooltip>
          </Link>
        </div>
      </nav>
    </ThemeContext.Provider>
  );
}

export default MainNavBar;
