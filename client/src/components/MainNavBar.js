import React, { useState, useEffect } from "react";
import { AppBar, Button, Stack } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import "../styling/main.css";

function MainNavBar(props) {
  const { navBarBackgroundColor, navBarTextColor } = props;
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div>
      <nav className={`main-navbar ${isScrolled ? "translucent-navbar" : ""}`}>
        {" "}
        <Button
          className="main-navbar-button"
          style={{ backgroundColor: "green" }}
        >
          <DarkModeOutlinedIcon className="home-icon" />
          {/* <LightModeOutlinedIcon className="home-icon" /> */}
        </Button>
        <Button
          className="main-navbar-button"
          style={{ backgroundColor: "Purple" }}
        >
          App Name
        </Button>
        <Button
          className="main-navbar-button"
          style={{ backgroundColor: "Orange" }}
        >
          <Person2Icon className="home-icon" />
        </Button>
      </nav>
    </div>
  );
}

export default MainNavBar;
