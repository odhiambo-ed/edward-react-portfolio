import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Facts from "./Facts";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Collective = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if (anchorEl) {
            setAnchorEl(null);
        }
        else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <i
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="bi bi-list mobile-nav-toggle d-xl-none"
            />
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <a href="#hero" className="nav-link scrollto active">
                        <i className="bx bx-home" /> <span>Home</span>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#about" className="nav-link scrollto">
                        <i className="bx bx-user" /> <span>About</span>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#resume" className="nav-link scrollto">
                        <i className="bx bx-file-blank" /> <span>Resume</span>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#portfolio" className="nav-link scrollto">
                        <i className="bx bx-book-content" /> <span>Portfolio</span>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#services" className="nav-link scrollto">
                        <i className="bx bx-server" /> <span>Services</span>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="https://medium.com/me/stories/public" className="nav-link scrollto">
                        <i className="bx bx-server" /> <span>Blog</span>
                    </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#contact" className="nav-link scrollto">
                        <i className="bx bx-envelope" /> <span>Contact</span>
                    </a>
                </MenuItem>
            </Menu>
            <header id="header">
                <Header />
            </header>
            <section
                id="hero"
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <Hero />
            </section>
            <main id="main">
                <section id="about" className="about">
                    <About />
                </section>
                <section id="facts" className="facts">
                    <Facts />
                </section>
                <section id="skills" className="skills section-bg">
                    <Skills />
                </section>
                <section id="resume" className="resume">
                    <Resume />
                </section>
                <section id="portfolio" className="portfolio section-bg">
                    <Portfolio />
                </section>
                <section id="services" className="services">
                    <Services />
                </section>
                <section id="testimonials" className="testimonials section-bg">
                    <Testimonials />
                </section>
                <section id="contact" className="contact">
                    <Contact />
                </section>
            </main>
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </div>
    );
};

export default Collective;
