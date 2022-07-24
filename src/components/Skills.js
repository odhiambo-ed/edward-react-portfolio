import React from "react";
import Progress from "./Progress";

const Skills = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>My Skills</h2>
        <p>
          I am a great web designer and backend developer. Using HTML skills, I
          create a strong web structure then brings alive the fonts, color
          coding and layouts with his CSS skills which are unmatchable. Ruby and
          Databases programming makes my skills even more excellent.
        </p>
      </div>
      <div className="row skills-content">
        <div className="col-lg-6" data-aos="fade-up">
          <div className="progress">
            <span className="skill">
              HTML <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <Progress progress={80} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              CSS <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <Progress progress={90} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              JavaScript <i className="val">95%</i>
            </span>
            <div className="progress-bar-wrap">
              <Progress progress={95} />
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="progress">
            <span className="skill">
              React<i className="val">95%</i>
            </span>
            <div className="progress-bar-wrap">
              <Progress progress={95} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Ruby &amp; Ruby on Rails<i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <Progress progress={90} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">
              Databases <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <Progress progress={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
