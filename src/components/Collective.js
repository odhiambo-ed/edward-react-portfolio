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

const Collective = () => {
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-xl-none" />
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
