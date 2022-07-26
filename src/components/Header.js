import React from "react";

const Header = () => {
  return (
    <div className="d-flex flex-column">
      <div className="profile">
        <img
          src="assets/img/profile-img.jpeg"
          alt="profile"
          className="img-fluid rounded-circle"
        />
        <h1 className="text-light">
          <a href="index.html">Edward Odhiambo</a>
        </h1>
        <div className="social-links mt-3 text-center">
          <a href="https://twitter.com/odhiambo_ed" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://github.com/white3d" className="google-plus">
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/edward-odhiambo/"
            className="linkedin"
          >
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <a href="#hero" className="nav-link scrollto active">
              <i className="bx bx-home" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto">
              <i className="bx bx-user" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <i className="bx bx-file-blank" /> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto">
              <i className="bx bx-book-content" /> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link scrollto">
              <i className="bx bx-server" /> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#hero" className="nav-link scrollto">
              <i className="bx bx-server" /> <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto">
              <i className="bx bx-envelope" /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
