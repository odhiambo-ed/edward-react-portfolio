import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Testimonials</h2>
        <p>
          Below are samples of testimonials about me, from some of the people I
          have worked closely with and those that knows me personally.
        </p>
      </div>
      <Carousel indicators={false} fade>
        <Carousel.Item>
          <div className="testimonial-item" data-aos="fade-up">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              I will stay committed to pass every test in school so I can get a
              great career thanks to the mentoring I have received from Mr.
              Edward. I have learnt the most about discipline and commitment
              from him. His passion for web development is an inspiration to me
              and all his other mentees.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="assets/img/testimonials/testimonials-1.jpg"
              className="testimonial-img"
              alt="prof"
            />
            <h3>Virag Kormoczy</h3>
            <span>- Hungary</span>
            <h4>Student | Microverse</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay={20}
          >
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              It is usually students who learn from teachers but I have also
              learnt from Mr. Edward. I wondered how he always made the time for
              the classes which I later learnt is a product of his commitment
              and dedication to improve his life and his family. He was always a
              step ahead of class, oozing interest and curiosity about design
              and coding. Excellent!
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="assets/img/testimonials/testimonials-2.jpg"
              className="testimonial-img"
              alt="prof"
            />
            <h3>Dennis Muturia</h3>
            <span>- Sweeden</span>
            <h4>Senior Software Engineer / DevOps(Docker and Kubernetes)</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay={20}
          >
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              I am yet to meet an individual with a generous heart as my husband
              Edward. He has such a giving spirit. I remember one evening he had
              an exam for his master’s class after a long day at work, but
              decided to help out a mentee student who was behind on his project
              before jumped right into his exam afterwards. Few individuals give
              back to the community with such generosity nowadays
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="assets/img/testimonials/testimonials-3.jpeg"
              className="testimonial-img"
              alt="prof"
            />
            <h3>Janet Mugure</h3>
            <span>- Kenya</span>
            <h4>Wife | Geospatial Engineer</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay={20}
          >
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              I had little idea where to start with coding until I met my
              mentor, Mr Edward. He made it so easy for me to get settled in
              with coding faster than I thought I would. He encouraged me and
              helped me out when I was stuck. He is my inspiration.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="assets/img/testimonials/testimonials-4.jpg"
              className="testimonial-img"
              alt="prof"
            />
            <h3>Nemwel Boniface</h3>
            <span>- Kenya</span>
            <h4>Student | Microverse</h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay={20}
          >
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Ed made me a website that works like a charm. I enjoy the ease of
              the UI and I highly recommend his web design skills to anyone in
              need of a website. My web visitors have commented on the color
              code and they love it especially. Great job Pal!
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="assets/img/testimonials/testimonials-5.png"
              className="testimonial-img"
              alt="prof"
            />
            <h3>Shubh Das</h3>
            <span>- India</span>
            <h4>Student | Microverse</h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
