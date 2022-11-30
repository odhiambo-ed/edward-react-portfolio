import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>About Me</h2>
        <p>
          Talented and innovative Full-Stack Web Developer with over 4 years of hands-on
          experience in web application development. Focused and efficient learner with
          advanced proficiency in HTML, CSS, JavaScript, Ruby, PostgreSQL and excellent
          customer service skills. I also have a solid foundation in the following
          frameworks: Bootstrap, ReactJS, Redux, Node.JS, Ruby on Rails and Test-driven development (Jest and RSpec).
          Seeking to leverage broad development experience and hands-on technical
          expertise in a challenging role as a Full-stack Developer.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 box" data-aos="fade-right">
          <img src="assets/img/Edward2.jpeg" className="img-fluid" alt="prof" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>SOFTWARE ENGINEER | Full Stack Developer(Rails, ReactJS)</h3>
          <p className="fst-italic">
            A developer with a love for Front-End:
            <mark>HTML</mark>,<mark>CSS</mark>,<mark>JavaScript</mark>,
            <mark>React</mark>,<mark>Redux</mark>,<mark>JQuery</mark>,<mark>HTML5</mark>,
            <mark>CSS3</mark>,<mark>Bootstrap5</mark>,<mark>Semantic UI</mark>and
            <mark>Material UI</mark>. Back-End: <mark>Ruby</mark>, <mark>Rails</mark>, <mark>PostgreSQL</mark>. 
            Tools & Methods: <mark>Git</mark>,<mark>GitHub</mark>,<mark>Heroku</mark>,<mark>Netlify</mark>,<mark>Mobile Development</mark>,
            <mark>TDD (Jest/RSpec)</mark> and <mark>Chrome Dev Tools</mark>. Professional: <mark>Remote Pair-Programming</mark>,<mark>Teamwork</mark>
            and <mark>Mentoring</mark>
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Birthday:</strong> <span>23rd October 1992</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Website:</strong> <span>www.edwardodhiambo.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  {/* <strong>Phone:</strong> <span>+123 456 7890</span> */}
                  <strong>Phone:</strong>
                  <span>
                    <a
                      href="tel:254726900598"
                      onclick={`ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'})`}
                    >
                      <p className="call-button">
                        Click to Call 254-726-900XXX
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>City:</strong> <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Age:</strong>
                  <span>29yrs</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Degree:</strong> <span>Master</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Email:</strong>
                  <span>
                    <a
                      href="mailto:odhiambo.edward111@gmail.com"
                      onclick={`gtag('event', 'click', { event_category: 'Mailto Link', event_action: 'Email Click', event_label:'#'})`}
                    >
                      Click to send mail
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
