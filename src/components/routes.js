import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";

export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);
