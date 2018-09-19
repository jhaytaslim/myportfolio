import React from 'react';
import PropTypes from 'prop-types'
import { Header as HD, Segment } from 'semantic-ui-react'
import AppLink from './link'

const Header = ({ Links }) => (
    <nav id="nav" className="ui fixed menu inverted">
        <ul className="ui container center-content">
            {/* <a href="#" className="header item app-header">
                <img class="logo" src="assets/images/logo.png" /> */}
            {/* <h2>{Title}</h2> */}
            {/* {this.props.children}
                Links.
            </a> */}
            {/* <ul> */}
                {( Links.length > 0) && Links.map((link, i) => {
                    return (
                        <AppLink key={i} {...link} />
                    )
                })}
            {/* </ul> */}
        </ul>
    </nav>
)

Header.propTypes = {
    Links: PropTypes.arrayOf(PropTypes.shape({
        Name: PropTypes.string.isRequired,
        NameLink: PropTypes.string.isRequired,
    })).isRequired,
}

export default Header