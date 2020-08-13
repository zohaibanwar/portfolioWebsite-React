import React from "react";
import "./App.css";
import Main from "./Components/main";
import { Link } from "react-router-dom";
import {
  Layout,
  Header,
  Textfield,
  Drawer,
  Navigation,
  Content,
} from "react-mdl";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
