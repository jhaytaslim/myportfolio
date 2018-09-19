'use strict';

import React from "react";
import SocialMedia from "./social_media";
// const ResumePropTypes = require('../prop_types/resume');
// const SocialMedia = require('./social_media');


const Banner=(props)=>(
    <div className='banner'>
        <div className='banner-text'>
            <h1 className='responsive-headline'>
                {props.basics.name}
            </h1>
            {/* <h3>{this.props.basics.summary}</h3> */}
            <br/>
            <hr className="hr"/>
            <SocialMedia ulClass='social' profiles={props.basics.profiles}/>
        </div>
    </div>
);

export default Banner;
