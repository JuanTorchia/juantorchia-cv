import React from "react";
import "../assets/styles/Main.scss";
import 'bootstrap';
import WhiteLogo from '../assets/images/logo-light.png';
import DarkLogo from '../assets/images/logo-dark.png';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
class NavBar extends React.Component {
    render() {
      return <nav className="navbar navbar-expand-lg fixed-top navbar-light sticky">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={WhiteLogo} alt className="logo-light" height={22} />
      <img src={DarkLogo} alt className="logo-dark" height={22} />
    </a>
    <a href="javascript:void(0)" className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={'false'} aria-label="Toggle navigation">
      <span className="navbar-toggle-icon"><MenuLineIcon className="ri-menu-line"/></span>
    </a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
    }
}

export default NavBar;