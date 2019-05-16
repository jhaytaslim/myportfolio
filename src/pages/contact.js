import React, { PureComponent } from 'react';
import { Grid, Cell , List,ListItem,ListItemContent} from 'react-mdl';
import profile from '../assets/images/Taslim_Office1_March2019.jpg';

export default class Contact extends PureComponent {
    render() {
        const data = require("../data/resume.json");
        return (
            <div className="contact-body" >
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Taslim ADIATU</h2>
                        <img
                            src={profile}
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: "75%", margin: 'auto', paddingTop: '1em' }}>{data.basics.summary}</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent  style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+234) 816 424 0882
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent  style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        (+234) 816 424 0882
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent  style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        taslimadiat@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent  style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        jhaytaslim
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}