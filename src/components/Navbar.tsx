import React from "react";

import {
  HomeIcon,
  ToolsIcon,
  UserIcon,
  PortfolioIcon,
  LetterIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon
} from '../images/menu-icons';

const Navbar: React.FC = () => {
  const navbar: any = React.useRef(null)

  const toggleNavbar = () => {
    if (navbar.current.style.left === '0px') {
      navbar.current.style.left = '-6rem'
    } else {
      navbar.current.style.left = '0px'
    }    
  }
  
  return (
    <nav ref={navbar} className="main-menu">
      <div onClick={toggleNavbar} className="main-menu_burger">
        <span></span>
      </div>
      <div className="main-menu_top">
        <a className="logo" href="/">
          <div className="main-menu_top_img"></div>
        </a>
      </div>
      <div className="main-menu_navigation">
        <a href="#home" data-name="home" className="main-menu_navigation_item">
          <HomeIcon />
          <p>Home</p>
        </a>
        <a href="#about" data-name="about" className="main-menu_navigation_item">
          <UserIcon />
          <p>About</p>
        </a>
        <a href="#skills" data-name="skills" className="main-menu_navigation_item">
          <ToolsIcon />
          <p>Skills</p>
        </a>
        <a href="#portfolio" data-name="work" className="main-menu_navigation_item">
          <PortfolioIcon />
          <p>Work</p>
        </a>
        <a href="#contact" data-name="contact" className="main-menu_navigation_item">
          <LetterIcon />
          <p>Contact</p>
        </a>
      </div>
      <div className="main-menu_links">
        <div className="main-menu_links_item">
          <a href="https://github.com/arseniypom" target="_blank">
            <div className="hexagon github-link">
              <GithubIcon />
            </div>
          </a>
        </div>
        <div className="main-menu_links_item">
          <a href="https://www.facebook.com/profile.php?id=100014215268900" target="_blank">
            <div className="hexagon facebook-link">
              <FacebookIcon />
            </div>
          </a>
        </div>
        <div className="main-menu_links_item">
          <a href="https://www.linkedin.com/in/arseniy-pomazkov-79a0901a2/" target="_blank">
            <div className="hexagon linkedin-link">
              <LinkedinIcon />
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;