import React, { PureComponent } from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Resume extends PureComponent{
    render(){
        return(
            <div >
                <Grid>
                    <Cell col={4}>
                        <div>
                            <img src="" alt="Taslim" style={{height:'200px'}}/>
                            <h2 style={{paddingTop:'2em'}}>Taslim ADIATU</h2>
                            <h4 style={{color:'grey'}}>Software Developer</h4>
                            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                            <p>
                                ...few things about me.
                            </p>
                            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                            <h5>Address</h5>
                            <p>Lagos,Nigeria</p>
                            <h5>Phone</h5>
                            <p>(234) 816 424 0882</p>
                            <h5>Email</h5>
                            <p></p>
                            <h5>Website</h5>
                            <p>github.io/jhaytaslim</p>
                        </div>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                    
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}