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
          <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white',}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
              {/* <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link> */}
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
            <footer style={{}}>
                {/* <div className='row'> */}
                <React.Fragment>
                    <div className="center-text"/*className='twelve columns'*/>
                        {/* <SocialMedia ulClass='social-links' profiles={this.props.content.profiles} /> */}
                        {/* <ul className='copyright'>
                            <li>
                                This site is developed in React.js by&nbsp;
                                <a
                                    href='https://jhaytaslim.github.io'
                                    title='Taslim Adiatu'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Taslim Adiatu
                                </a> from the original design of Ceevee from&nbsp;
                                <a
                                    href='http://www.styleshout.com/'
                                    title='Styleshout'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Styleshout
                                </a>
                            </li>
                        </ul> */}

                        <p >
                            This site was developed in React.js by&nbsp;
                            <a
                                href='https://jhaytaslim.github.io'
                                title='Taslim Adiatu'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Taslim ADIATU
                            </a>  © {new Date().getFullYear()} 
                            {/* from the original design of Ceevee from&nbsp; */}

                            {/* <a
                                href='http://www.styleshout.com/'
                                title='Styleshout'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Styleshout
                            </a> */}
                        </p>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open' />
                        </a>
                    </div>
                </React.Fragment>
            </footer>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
