import React,{PureComponent} from 'react';
import {Grid,Cell} from 'react-mdl'; 

class Experience extends PureComponent{
    render(){
        return(
            <Grid>
                <Cell col={3}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={9}>
                    <h4 style={{marginTop:'0px'}}>{this.props.employer}</h4>
                    {this.props.jobDescription.map((jd,i)=>(
                        <li>{jd}</li>
                    ))}
                </Cell>
            </Grid>
        );
        
    }
}

export default Experience;