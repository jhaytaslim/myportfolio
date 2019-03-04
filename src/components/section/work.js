'use strict';
import React,{Fragment}  from 'react';
import BulletPoints from './bullet_points';

const PropTypes = require('prop-types');
const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');

class  Entry extends React.PureComponent {
   static propTypes= {
        index: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        entry: ResumePropTypes.work
    }

    render() {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        const index = this.props.index + 1;
        const divider = index === this.props.total ? (<br/>) : (<hr/>);
        const {highlights}=this.props.entry;
        return (
            <div /*className='row item'*/>
                {/* <div className='twelve columns'> */}
                <Fragment>
                    <h3>
                        <a href={this.props.entry.website}>{this.props.entry.company}</a>
                    </h3>
                    <p className='info'>
                        {this.props.entry.position}
                        <span> &bull; </span>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                    <BulletPoints points={highlights}/>
                </Fragment>
                {/* </div> */}
                {divider}
            </div>
        );
    }
};

class Work extends React.PureComponent{
    static propTypes= {
        content: ResumePropTypes.workSet
    }

    render () {
        const numEntries = this.props.content.length;
        return (
            <div id='work'>
                <div /*className='row work'*/>
                    <div /*className='ten columns main-col'*/>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} index={index} total={numEntries} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default Work;
