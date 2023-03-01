/* eslint-disable react/jsx-one-expression-per-line */
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import React from "react";
import Hero from "../components/Hero";

function About() {
  return (
    <main>
      <div className="row">
        <div className="about-container">
          <Hero title="about me." description="Learn more about me" />
          <div className="details">
            <p>
              My name is Nezerwa Eligrand from Kigali Rwanda. I am a software
              Enginner mostly specializing in MERN stack, Ruby and Ruby on Rails
              and Next Js.
            </p>
            <div className="contacts">
              <ul>
                <li>
                  <BsGithub className="icon" /> Github:{" "}
                  <a
                    href="https://github.com/Nezerwa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Nezerwa
                  </a>
                </li>
                <li>
                  <BsLinkedin className="icon" /> LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/eligrad-nezerwa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/eligrand-Nezerwa
                  </a>
                </li>
                <li>
                  <BsGlobe className="icon" /> Website 1:{" "}
                  <a
                    href="https://nezerwa.github.io/Portfolio-Project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nezerwa.github.igo/Portfolio-project/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
