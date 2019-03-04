'use strict';
import propTypes from 'prop-types'
const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');

class BulletPoints extends React.PureComponent{
    

    render() {
        const {points}=this.props;
        return (
            <div>
                {points && points.map(function (point, index) {
                    return (
                        <p key={index} className='point'>
                            <span className='bullet-point'>&bull; </span>
                            {point}
                        </p>
                    );
                })}
                {/* Points l : {points.length} */}
            </div>
        );
    }
}

BulletPoints.propTypes= {
    points: ResumePropTypes.bulletPoints
}

export default BulletPoints;
