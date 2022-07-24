import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>About Me</h2>
        <p>
          Incredibly Talented Full-Stack Software Developer with a love for
          Cyber security Solutions such as Network Firewalls, Internet Traffic
          Protection Systems, Protected Remote Access, Security Event Monitoring
          Systems and Intrusion Prevention Systems. A wealth of experience in
          directing teams in driving Software, Hardware and IT centered
          projects. Seeks to bring mastery and aptitude to the team. Excited for
          new ventures and discoveries.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 box" data-aos="fade-right">
          <img src="assets/img/Edward2.jpeg" className="img-fluid" alt="prof" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Software Engineering &amp; Cyber Security Specialist</h3>
          <p className="fst-italic">
            A developer with a love for
            <mark>HTML</mark>,<mark>CSS</mark>,<mark>JavaScript</mark>,
            <mark>React</mark>,<mark>Ruby</mark>and
            <mark>Ruby on Rails</mark> / A Cyber security enthusiast with
            top-notch abilities in Cyber Security Solutions; Network Firewalls,
            Internet Traffic Protection Systems, Protected Remote Access,
            Security Event Monitoring Systems and Intrusion Prevention Systems.
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
