import React from "react";

import {
  HomeIcon,
  ToolsIcon,
  UserIcon,
  PortfolioIcon,
  LetterIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon
} from '../images/menu-icons';

const Navbar: React.FC = () => {
  const navbar: any = React.useRef(null)

  const [isNavbarActive, setNavbarActive] = React.useState(false)
  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev)
  }
  
  return (
    <nav ref={navbar} className={isNavbarActive ? "main-menu main-menu--active" : "main-menu"}>
      <div onClick={toggleNavbar} className="main-menu_burger">
        <span></span>
      </div>
      <div onClick={() => setNavbarActive(false)} className="main-menu_burger-background"></div>
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
          <a href="https://github.com/arseniypom" target="_blank" rel="noreferrer">
            <div className="hexagon github-link">
              <GithubIcon />
            </div>
            <p>GitHub</p>
          </a>
        </div>
        <div className="main-menu_links_item">
          <a href="https://www.instagram.com/pomazkov.js/" target="_blank" rel="noreferrer">
            <div className="hexagon instagram-link">
              <InstagramIcon />
            </div>
            <p>Facebook</p>
          </a>
        </div>
        <div className="main-menu_links_item">
          <a href="https://www.linkedin.com/in/arseniy-pomazkov-79a0901a2/" target="_blank" rel="noreferrer">
            <div className="hexagon linkedin-link">
              <LinkedinIcon />
            </div>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;