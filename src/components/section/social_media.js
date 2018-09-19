'use strict';

const React = require('react');
const PropTypes = require('prop-types');

function mapIcon(socialMedia) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className={'envelope icon'}/>
            );
        case 'quora':
            return (
                <i className='quora icon'>
                    {/* <strong className='quora icon'>Q</strong> */}
                </i>
            );
        default:
            return (
                <i className={`${media} icon`}/>
            );
    }
}

const SocialMedia=(props)=>(
    <ul className={props.ulClass}>
        {props.profiles.map(function (profile, index) {
            const icon = mapIcon(profile.network.toLowerCase());
            return (
                <li key={index}>
                    <a href={profile.url} target="_blank">
                        {icon}
                    </a>
                </li>
            );
        })}
    </ul>
)
export default SocialMedia;
