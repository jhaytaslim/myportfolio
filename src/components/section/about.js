import React,{Fragment} from 'react';
const ResumePropTypes = require('../../prop_types/resume');

const About=(props)=>(
    <div className="ui  grid about" id='about'>
        <div className='row'>
            <div className='three wide column section-title'>
                <img className='profile-pic' src={require(`../../data/${props.basics.picture}`)} alt={props.basics.name}/>
            </div>
            <div className='thirteen wide column'>
                <h2>About Me</h2>
                {props.basics.summary.map(function (content, index) {
                    return (
                        <p key={index}>
                            {content}
                        </p>
                    );
                })}
                <div className='row'>
                    <div className='three wide column '>
                        {/* <img className='profile-pic' src={props.basics.picture} alt={props.basics.name}/> */}
                    </div>
                    <div className='thirteen wide column'>
                        <h2>Contact Details</h2>
                        <p className='address'>
                            {/*
                            <span>{props.basics.location.address}</span>
                            <br/>
                            */}
                            <span>{props.basics.location.city}</span>
                            <br/>
                            <span>{props.basics.location.countryCode}</span>
                            <br/>
                            <a href={`skype:${props.basics.phone}`}>
                                <span>{props.basics.phone}</span>
                            </a>
                            <br/>
                            <a href={`mailto:${props.basics.email}`}>
                                <span>{props.basics.email}</span>
                            </a>
                        </p>
                    </div>
                    {/*
                    <div className='columns download'>
                        <p>
                            <a href='#' className='button'>
                                <i className='fa fa-download'></i>
                                Download Resume
                            </a>
                        </p>
                    </div>
                    */}
                </div>
            </div>
        </div>
    </div>
)


About.propTypes= {
    content: ResumePropTypes.basics
}


export default About;