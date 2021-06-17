import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="main-menu">
      <div className="main-menu_top">
        <a className="logo" href="/">
          <div className="main-menu_top_img"></div>
        </a>
      </div>
      <div className="main-menu_links">
        <a href="#about" className="main-menu_links_item">About</a>
        <a href="#skills" className="main-menu_links_item">My skills</a>
        <a href="#portfolio" className="main-menu_links_item">Work</a>
        <a href="#contact" className="main-menu_links_item">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;