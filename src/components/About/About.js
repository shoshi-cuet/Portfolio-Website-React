import React from "react";

import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years of Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years of Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years of Working</small>
            </article>
          </div>

          <p>
            fjdhgidf isfgh jiag friahg firwagh ejfow wjehf weofJIH JFRG FIWAERHF egrkjoe erojhg grigh ejgh eorgj rgjieo gjrthy irejth rhge hturg rijos oerjt negrjg erthui tji tjh ewoirh trjehtg erjhtg jerith rjtgh rjghnre rjegh jrtreh. rjgfier reowij jregnjie jwerf jfrorig hjoj tojrjh øqlwekd jtgnti roeighj wijrewp rwjit rfoirjg erroiwf gnutgn ewiurhf rjfir ngt gijr erfieo.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
