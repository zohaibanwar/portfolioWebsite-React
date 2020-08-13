import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
                alt="avatr"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Username</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h5>Address</h5>
            <p>House No X, Town X, City X, Country</p>

            <h5>Phone</h5>
            <p>(123) 456-7890</p>

            <h5>Email</h5>
            <p>someone@example.com</p>

            <h5>Web</h5>
            <p>mywebsite.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2016}
              collageName="My Collage"
              collageDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2016}
              endYear={2020}
              collageName="My University"
              collageDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="My first Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="My first Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="HTML | CSS" progress={90} />
            <Skills skill="JavaScript" progress={90} />
            <Skills skill="React" progress={65} />
            <Skills skill="NodeJS" progress={60} />
            <Skills skill="React Native" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
