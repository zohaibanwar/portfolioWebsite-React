import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Front-End Android and Web Developer</h1>
              <hr />

              <p>
                {" "}
                HTML | CSS | Bootstrap | JavaScript | React | React Native |
                Node JS
              </p>

              <div className="social-links">
                {/*Linkedin*/}
                <a
                  href="http://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a
                  href="http://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Twitter*/}
                <a
                  href="http://twitter.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter square" aria-hidden="true" />
                </a>

                {/*Free code camp*/}
                <a
                  href="http://freecodecamp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
