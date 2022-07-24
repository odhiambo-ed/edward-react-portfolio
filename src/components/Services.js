import React from "react";

const Services = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Services</h2>
        <p>
          I have comprehensive knowledge regarding frontend and backend web
          development projects. I am also a skilled Cyber Security Specialist. I
          provide a complete product or services at anytime:
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div className="icon">
            <i className="bi bi-briefcase" />
          </div>
          <h4 className="title">
            <a href="">Front end development</a>
          </h4>
          <p className="description">
            A vastly experienced software engineer who designs websites using
            JavaScript, CSS, SASS, LESS and HTML to name a few. Great with
            creating website features and elements which will be viewed by the
            user. My GUIs are always user friendly and have great functionality.
          </p>
        </div>
        <div
          className="col-lg-4 col-md-6 icon-box"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="icon">
            <i className="bi bi-card-checklist" />
          </div>
          <h4 className="title">
            <a href="">Backend development</a>
          </h4>
          <p className="description">
            Equipped with essential backend coding skills included Ruby, Ruby on
            Rails and Databases to name a few. I have great insights on popular
            frameworks and is familiar with servers as well as APIs.
          </p>
        </div>
        <div
          className="col-lg-4 col-md-6 icon-box"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="icon">
            <i className="bi bi-bar-chart" />
          </div>
          <h4 className="title">
            <a href="">Cloud and DevOps</a>
          </h4>
          <p className="description">
            Being a great coder, and with vast knowledge of Ruby and Databases
            makes me a great DevOps engineer. A creative who likes to work with
            teams to create together a more efficient code release.
          </p>
        </div>
        <div
          className="col-lg-4 col-md-6 icon-box"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="icon">
            <i className="bi bi-binoculars" />
          </div>
          <h4 className="title">
            <a href="">UX/UI Design | Prototyping</a>
          </h4>
          <p className="description">
            As a designer with knowledge of Figma and Adobe InDesign. Skills of
            curiosity, visual communication, collaboration and user empathy.
            These make his designs target friendly. His prototypes always get
            affirmed for full development as they validate his ideas as
            practical and effective.
          </p>
        </div>
        <div
          className="col-lg-4 col-md-6 icon-box"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="icon">
            <i className="bi bi-brightness-high" />
          </div>
          <h4 className="title">
            <a href="">Quality Control &amp; Testing</a>
          </h4>
          <p className="description">
            I have vast knowledge of quality assurance with Jest testing
            framework. I have handled Cross-platform testing, user interface
            testing, code reviews and automated testing. By running these tests,
            he guarantees that the websites are up to standard by eliminating
            weaknesses and potential loopholes.
          </p>
        </div>
        <div
          className="col-lg-4 col-md-6 icon-box"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="icon">
            <i className="bi bi-calendar4-week" />
          </div>
          <h4 className="title">
            <a href="">Cyber Security Consulting</a>
          </h4>
          <p className="description">
            I have a certificate in ethical hacking and several projects done on
            the same. I perform penetration testing as well as firewall safety
            management. He also is well versed with encryption techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
