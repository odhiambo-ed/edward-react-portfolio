import React from "react";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>My Portfolio</h2>
        <p>
          A confident designer. An expert who always manages to blend his
          passion for intricate web designs with performance and functionality,
          putting him in the elite category of designers. Proficient in
          programming and creating high end web designs. A web developer from
          Africa, always available and willing to help others complete even the
          toughest projects using his expertise. My Showcase can be found below:
        </p>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">Latest</li>
            <li data-filter=".filter-card">Top</li>
            <li data-filter=".filter-web">Popular</li>
          </ul>
        </div>
      </div>
      <div
        className="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/ecom.png"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/ecom.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Fake Terminal Portfolio"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/react-ecommerce-app"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/chat1.png"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/chat1.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Fake Terminal Portfolio"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/code-chat-app"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/book.png"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/book.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Fake Terminal Portfolio"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/React-Rails-API-BookStore"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/portfolio-1.jpg"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/portfolio-1.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="ToDo List App"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/My-ToDo-List"
                target="”_blank”"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/portfolio-2.jpg"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/portfolio-2.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Book List App"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/MyBookList"
                target="_blank"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/portfolio-3.jpg"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/portfolio-3.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Portfolio Website"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/Portfolio"
                target="_blank"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/portfolio-4.jpg"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/portfolio-4.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Microverse Capstone Project 1"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/Capstone-Project-Microverse"
                target="_blank"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/portfolio-5.jpg"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/portfolio-5.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Webpack App Config"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/My-First-Webpack"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="assets/img/portfolio/portfolio-6.jpg"
              className="img-fluid"
              alt="prof"
            />
            <div className="portfolio-links">
              <a
                href="assets/img/portfolio/portfolio-6.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox"
                title="Fake Terminal Portfolio"
              >
                <i className="bx bx-plus" />
              </a>
              <a
                href="https://github.com/white3d/fake-terminal-portfolio"
                title="More Details"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
