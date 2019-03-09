import React, { Component } from 'react';
import {Content,Drawer,Header,Layout,Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';

import Main from "./routes/main";
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title=" " scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contacts</Link>
            </Navigation>
          </Header>
          {/* <Drawer className="header-color" title="Title">
            <Navigation>
            <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contacts</Link>
            </Navigation>
          </Drawer> */}
          <Content>
            {/* <div className="page-content" /> */}
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
