'use strict';

import React from 'react';
import SocialMedia from '../social_media';

const ResumePropTypes = require('../../prop_types/resume');

class Footer extends React.PureComponent {
    static propTypes = {
        content: ResumePropTypes.basics
    }

    render() {
        return (
            <footer>
                {/* <div className='row'> */}
                <React.Fragment>
                    <div className="center-text"/*className='twelve columns'*/>
                        <SocialMedia ulClass='social-links' profiles={this.props.content.profiles} />
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
        );
    }
};

export default Footer;
