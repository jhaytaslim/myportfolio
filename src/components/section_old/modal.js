'use strict';

const React = require('react');
const PropTypes = require('prop-types');

const ReactModal = require('react-modal');

const ResumePropTypes = require('../../prop_types/resume');

class Modal extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        const style = {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }
        };

        return (
            <ReactModal className='popup-modal mfp-hide' isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} style={style}>
                <img
                    className='scale-with-grid'
                    src={this.props.entry.image.modal}
                    alt={this.props.entry.name}/>
                <div className='description-box'>
                    <h5>{this.props.entry.name}</h5>
                    <p>{this.props.entry.summary}</p>
                    <span className='categories'>
                        <i className='fa fa-tag'/>
                        {this.props.entry.keywords.join(', ')}
                    </span>
                </div>
                <div className='link-box'>
                    <a
                        href={this.props.entry.website}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Details
                    </a>
                    <a className='popup-modal-dismiss' onClick={this.props.onRequestClose}>Close</a>
                </div>
            </ReactModal>
        );
    }
}

Modal.propTypes= {
    entry: ResumePropTypes.publications,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
}

export default Modal;
