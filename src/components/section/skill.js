import React,{Fragment} from "react";
// import


const handleMouseEnter=(e)=> {
    e.target.style.backgroundColor='#11ABB0';
}

const handleMouseLeave=(e)=>{
    e.target.style.backgroundColor='#313131';
}

const Entry=({entry})=>{
    return(
        <li>
            <span
                className={`bar-expand percentage `}
                onMouseEnter={(e)=>handleMouseEnter(e)}
                onMouseLeave={(e)=>handleMouseLeave(e)}
                style={{width:`${entry.level}%`}}
            />
            <em>{entry.name}</em>
            
        </li>
    );
    
};


const Skill=(props)=>{
    const summary = props.summary.map(function (point, index) {
        return (
            <p key={index} className='skill-summary'>{point}</p>
        );
    });
    return (
        <Fragment /*className='row inside'*/>
            <h3>{props.title}</h3>
            {summary}
            {/* <strong>{props.content.length}</strong> */}
            <div className='bars'>
                <ul className='skills'>
                    {props.content.map(function (entry, index) {
                        return (
                            <Entry key={index} entry={entry}/>
                            // <span>{entry.name}</span>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

const Skills = (props)=>{
    

    // render: function () {
        let contents={
            skills:props.skills || [],
            languages:props.language || [],
        }
    return (
        <Fragment /*id='skill'*/>
            <Fragment /*className='row skill' */>
                <div className='ten columns '>
                    {contents.skills.map(function (skill, index) {
                        return (
                            <Skill
                                key={index}
                                title={skill.title}
                                content={skill.skillDetails}
                                summary={skill.description}/>
                        );
                    })}
                </div>
            </Fragment>
        </Fragment>
    );
};
// }
// );

// propTypes: {
//     content: PropTypes.shape({
//         skills: ResumePropTypes.skillsSet,
//         languages: ResumePropTypes.languagesSet
//     }).isRequired
// },
export default Skills;