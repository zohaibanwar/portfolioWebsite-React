import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contacts from "./contact";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
