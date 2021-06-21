import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools } from '@fortawesome/free-solid-svg-icons';
import {
  HomeIcon,
  ToolsIcon,
  UserIcon,
  PortfolioIcon,
  LetterIcon
} from '../images/menu-icons';

const Navbar: React.FC = () => {
  
  return (
    <nav className="main-menu">
      <div className="main-menu_top">
        <a className="logo" href="/">
          <div className="main-menu_top_img"></div>
        </a>
      </div>
      <div className="main-menu_links">
        <a href="#home" data-name="home" className="main-menu_links_item">
          <HomeIcon />
          <p>Home</p>
        </a>
        <a href="#about" data-name="about" className="main-menu_links_item">
          <UserIcon />
          <p>About</p>
        </a>
        <a href="#skills" data-name="skills" className="main-menu_links_item">
          <ToolsIcon />
          <p>Skills</p>
        </a>
        <a href="#portfolio" data-name="work" className="main-menu_links_item">
          <PortfolioIcon />
          <p>Work</p>
        </a>
        <a href="#contact" data-name="contact" className="main-menu_links_item">
          <LetterIcon />
          <p>Contact</p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;