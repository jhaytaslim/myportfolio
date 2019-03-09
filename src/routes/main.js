import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Landing from '../pages/landing';
import AboutMe from '../pages/aboutme';
import Project from '../pages/project';
import Resume from '../pages/resume';
import Contact from '../pages/contact';

 const Main=()=>(
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/project" component={Project}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
 )

 export default Main;