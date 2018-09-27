import React, { Component, Fragment } from "react";
import "../App.css";
import { Grid, Cell } from "react-mdl";
import Photo from "../images/profile-pic.jpg";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="Landing-background">
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={Photo} alt="photo-of-dillon" className="avatar-img" />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              HTML/CSS | Java | JavaScript | React | NodeJS | Express | MongoDB
            </p>
            <div className="social-links">
              {/*LinkedIn*/}
              <a
                href="https://www.linkedin.com/in/dillon-embreus-7691a2166/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*Github*/}
              <a
                href="https://github.com/dembreus"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
                {/* <i className="fab fa-github-square" /> */}
              </a>
              {/* Dice */}
              <a
                href="https://www.dice.com/profile/publicview/1e86b1d699fce6cfda2f3ed76865eab8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-dice" aria-hidden="true" />
              </a>
              {/*Freecodecamp*/}
              {/* <a href="/"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a> */}
              {/*Youtube*/}
              {/* <a href="/"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a> */}
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandingPage;
