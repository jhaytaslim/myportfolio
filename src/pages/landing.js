import React, { PureComponent } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../assets/images/Taslim_Office1_March2019.jpg';

export default class Landing extends PureComponent {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto', }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={profile}
                            alt="profile image"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>FullStack Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | React | React Native | Dotnet Core | Asp.Net | C# | Node js | Express | SQL | Mongodb</p>
                            <div className="social-links">
                                {/*Linkedin */}
                                <a href="https://www.linkedin.com/in/taslimadiat/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github */}
                                <a href="https://github.com/jhaytaslim" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Medium */}
                                <a href="https://medium.com/@jhaytaslim" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-medium" aria-hidden="true"></i>
                                </a>
                                {/*Youtube */}
                                <a href="https://www.youtube.com/channel/UCPkXstr7HdJ6Ci7cfxZ1JOA" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>
                                {/*Linkedin */}
                                {/* <a href="https://www.linkedin.com/in/taslimadiat/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a> */}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}