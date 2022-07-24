import React from "react";

const Facts = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>GitHub Facts</h2>
        <p>
          I have submitted clean codes on GitHub, free from linters. I try as
          much as I can to resolve all the repo issues. More commits, followers
          and stars are what I long for. My aim is to be a top contributor and
          collaborator in the GitHub community.
        </p>
      </div>
      <div className="row no-gutters">
        <div
          className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
          data-aos="fade-up"
        >
          <div className="count-box">
            <i className="bi bi-emoji-smile" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={473}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              <strong>My Commits</strong>
            </p>
            <p>Changes in my Repo files</p>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="count-box">
            <i className="bi bi-journal-richtext" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={52}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              <strong>My Repositories</strong>
            </p>
            <p>My sample projects pushed in GitHub</p>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="count-box">
            <i className="bi bi-star" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={52}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              <strong>Stars</strong>
            </p>
            <p>Star ratings in my GitHub</p>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="count-box">
            <i className="bi bi-people" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={532}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>
              <strong>GitHub Followers</strong>
            </p>
            <p>My friends in GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
