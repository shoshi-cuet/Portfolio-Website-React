import React from "react";

import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* FRONTEND SERVICES */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>
          </ul>
        </article>

        {/* WEB DEVELOPMENT SERVICES */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>
          </ul>
        </article>

        {/* CONTENT CREATION SERVICES */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>oirjgoierjp jorejgoirwjo jrhfgiehrgiu jorejgoiejt</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
