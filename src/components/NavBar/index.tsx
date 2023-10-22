import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

// import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <button onClick={() => console.log("teste")}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default NavBar;
