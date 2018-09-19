
import React from 'react';
import About from './about';
// import Work  from './work';
// import Education  from './education';
// import Skills  from './skills';
// import Portfolio  from './portfolio';
// import References  from './references';
// import Footer  from './footer';

const ResumePropTypes  =require( '../../prop_types/resume');

class Section extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("inex Props : "+JSON.stringify(this.props))
    }
    render() {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                {/* <h1>index</h1> */}
                <About content={this.props.basics}/>
                {/* <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/> */}
            </div>
        );
    }
}

Section.propTypes= {
    basics: ResumePropTypes.basics,
    work: ResumePropTypes.workSet,
    education: ResumePropTypes.educationSet,
    skills: ResumePropTypes.skillsSet,
    languages: ResumePropTypes.languagesSet,
    portfolio: ResumePropTypes.publicationsSet,
    references: ResumePropTypes.referencesSet
}

export default Section;
