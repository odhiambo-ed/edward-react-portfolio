import React from "react";

const Resume = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Resume</h2>
        <p>
          Talented Full-Stack Software Developer with a love for
          <mark>HTML</mark>,<mark>CSS</mark>,<mark>JavaScript</mark>,
          <mark>React</mark>,<mark>Ruby</mark>and
          <mark>Ruby on Rails</mark> / A Cyber security enthusiast with
          top-notch abilities in Cyber Security Solutions; Network Firewalls,
          Internet Traffic Protection Systems, Protected Remote Access, Security
          Event Monitoring Systems and Intrusion Prevention Systems. Experienced
          with leading teams driving Software, Hardware and IT related projects.
          Seek to bring knowledge and abilities to new position with growing
          team. Open to new opportunities.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Edward Odhiambo</h4>
            <p>
              <em>
                A graduate with bachelors of Science in Information Technology.
                A student at Microverse/ Also a Masters in Information Systems
                and student at the University of Nairobi. A FullStack web
                developer with a passion for developing scalable web
                applications and working across the full stack.
              </em>
            </p>
            <ul>
              <li>Box 19207 - 00501, JKIA, Kenya</li>
              <li>
                <span>
                  <a
                    href="tel:254726900598"
                    onclick={`ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'})`}
                  >
                    <p className="call-button">Click to Call 254-726-900XXX</p>
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a
                    href="mailto:odhiambo.edward111@gmail.com"
                    onclick={`gtag('event', 'click', { event_category: 'Mailto Link', event_action: 'Email Click', event_label:'#'})`}
                  >
                    Click to send mail
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Master of Information Systems</h4>
            <h5>2021 - Current</h5>
            <p>
              <em>University of Nairobi, Nairobi, Kenya</em>
            </p>
            <p>Ongoing</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Science Information Technology</h4>
            <h5>2012 - 2016</h5>
            <p>
              <em>Murang'a University of Technology, Murang'a, Kenya</em>
            </p>
            <p>Second Class Honours</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>FullStack Web Developer</h4>
            <h5>Feb, 2022 - Oct, 2022</h5>
            <p>
              <em>MICROVERSE, San Francisco, US </em>
            </p>
            <ul>
              <li>
                <mark>HTML</mark>
              </li>
              <li>
                <mark>CSS</mark>
              </li>
              <li>
                <mark>JavaScript</mark>
              </li>
              <li>
                <mark>React</mark>
              </li>
              <li>
                <mark>Ruby</mark>
              </li>
              <li>
                <mark>Ruby on Rails</mark>
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Certified Ethical Hacker (CEH)</h4>
            <p>EC-Council Exam</p>
            <h5>2017 - 2018</h5>
            <p>
              <em>Strathmore University, Nairobi, Kenya</em>
            </p>
            <ul>
              <li>
                <strong>Certification Number:</strong> ECC1640352789
              </li>
              <li>
                <strong>Score:</strong> 95.2%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
