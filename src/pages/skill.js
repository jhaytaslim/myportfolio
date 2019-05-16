import React,{PureComponent} from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl'; 

class Skill extends PureComponent{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display:'flex',}}>
                        <Cell col={3}>{this.props.skill}</Cell>
                        <ProgressBar style={{margin:'auto',width:'75%',}} progress={this.props.progress}/>
                    </div>
                </Cell>
            </Grid>
        );
        
    }
}

export default Skill;