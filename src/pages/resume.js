
import React, { PureComponent } from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import profile from '../assets/images/Taslim_Office1_March2019.jpg';

const mystring="In the following code of an ASP.NET MVC Core project, the Get action method Test(...) is displaying a dropdown list of years. By default, the dropdown displays the first year in the list (i.e. 2000) as a Selected value."

export default class Resume extends PureComponent{
    render(){
        const data = require("../data/resume.json");
        console.log(JSON.stringify(data.work));
        return(
            <div >
                <Grid>
                    <Cell col={4}>
                        <div>
                            <img src={profile} alt="Taslim" style={{height:'200px'}}/>
                            <h2 style={{paddingTop:'1.2em',fontSize: '30px'}}>{data.basics.name}</h2>
                            <h4 style={{color:'grey'}}>{data.basics.label}</h4>
                            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                            <p>
                                {data.basics.summary}
                            </p>
                            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                            <h5>Address</h5>
                            <p>Lagos,Nigeria</p>
                            <h5>Phone</h5>
                            <p>{data.basics.phone}</p>
                            <h5>Email</h5>
                            <p>{data.basics.email}</p>
                            <h5>Website</h5>
                            <p>{data.basics.gitWebsite}</p>
                        </div>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        {
                            data.education.map((ed,i)=>(
                                <Education
                                    startYear={ed.startDate}
                                    endYear={ed.endDate}
                                    courseName={ed.courseName}
                                    schoolName={ed.institution}
                                    schoolDescription={''}
                                />
                            ))
                        }
                        
                        
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        {
                            data.work.map((exp,i)=>(
                                <Experience
                                    startYear={exp.startDate}
                                    endYear={exp.endDate}
                                    employer={exp.company}
                                    jobDescription={exp.highlights}
                                    key={i}
                                />
                            ))
                        }
                        
                        <hr style={{borderTop:'3px solid #e22947'}}/> 
                        <h2>Skills</h2>
                        {
                            data.skills[0].skillDetails.map((sk,i)=>(
                                <Skill skill={sk.name} progress={sk.level} key={i}/>
                            ))
                        }
                        
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}