import React, { useState, useEffect, useContext } from "react";
import { Button } from "@mui/material";
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
    const newBackgroundColor =
      theme === "dark" ? "var(--dark-bg)" : "var(--light-bg)";
    document.documentElement.style.backgroundColor = newBackgroundColor;
    document.body.style.backgroundColor = newBackgroundColor;
  }, [theme]);

  const navbarClass = `main-navbar ${isScrolled ? "scrolled" : ""} ${theme}`;

  const logoImage = theme === "dark" ? WhiteTransparent : BlackTransparent;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <nav className={navbarClass} id={theme}>
        <div className="main-navbar-content">
          {/* Icons on the left */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="main-navbar-button" onClick={toggleTheme}>
              <ThemeIcon className="home-icon" />
            </Button>
            <Button className="main-navbar-button">
              <Person2Icon className="home-icon" />
            </Button>
          </div>

          {/* App Name on the right */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Link to="/">Home</Link> */}
            {/* <Button className="main-navbar-button">App Name</Button> */}

            <img
              src={logoImage}
              style={{ maxWidth: "14%", maxHeight: "14%", marginLeft: "auto" }}
            />
          </div>
        </div>
      </nav>
    </ThemeContext.Provider>
  );
}

export default MainNavBar;
