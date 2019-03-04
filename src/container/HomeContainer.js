
import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import axios from 'axios';
import Header from '../components/section/header';
import PageSection from '../components/section/section';
import AppLink from '../components/section/link';
import About from "../components/section/about";
import Banner from "../components/section/banner";
import Skill from "../components/section/skill";
import Work from "../components/section/work";
import Footer from "../components/section/footer";
//const Header = require('./header');
//const Navigation = require('./navigation');
//const Banner = require('./banner');
//const ScrollDown = require('./scrolldown');
//const Section = require('./section');
import Loading from '../components/loading';
import Section from '../components/section';
//import '../data/resume' as resumeX
import scrollToComponent from 'react-scroll-to-component';


const resumeX = require('../data/resume')
const Links = require('../data/Link')

const getInitialState = () => {
    return {
        resume: false,
        links: Links,
    };
}

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = getInitialState()


    }




    async  componentDidMount() {
        await this.setState({ resume: resumeX })
        console.log(this.state)
        console.log(JSON.stringify(this.props))
        // return request
        //     .get(this.props.route.config.resumePath)
        //     .end(function (error, response) {
        //         return error ? error : this.setState({
        //             resume: response.body
        //         });
        //     }.bind(this));
    }

    onLoad() {
        let setting = { offset: 0, align: 'middle', duration: 1500 };
        return (
            <div className="ui fluid container">
                <div className="header">
                    <Header >
                        {
                            Links.length > 0 && Links.map((link, i) => {
                                return (
                                    <AppLink key={i} {...link}
                                        OnClick={() => { scrollToComponent(this[link.NameLink], setting) }}
                                    />
                                )
                            })
                        }
                    </Header>
                </div>

                <br />
                <div className="body">
                    <section className="section banner-container" ref={(section) => { this.Main = section; }}>
                        <PageSection
                            content={<Banner style="text-align: center !important;" {...resumeX} />}
                            styleName="center-text"
                        />
                    </section>
                    <section className="section" ref={(section) => { this.About = section; }}>
                        <PageSection
                            content={<About {...resumeX} />}

                        />
                    </section>
                    <section className="section-flex main-col" ref={(section) => { this.Skill = section; }}>
                        <PageSection
                            // className="section" ref={(section) => { this.Skill = section; }}
                            title="Skill"
                            content={<Skill {...resumeX} />}
                        />
                    </section>
                    <section className="section-flex main-col" ref={(section) => { this.Work = section; }}>
                        <PageSection
                            title="Work"
                            content={<Work content={resumeX.work} />}
                        />
                    </section>
                    {/* <section className="section" ref={(section) => { this.Reference = section; }}>
                        <PageSection
                            title="references"
                            content="Hi from third"
                        />
                    </section> */}
                    <div>
                        <Footer content={resumeX.basics}/>
                    </div>
                </div>

            </div>
        );
    }

    beforeLoad() {
        return (
            <Loading />
        );
    }

    render() {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
}

HomeContainer.propTypes = {
    // route: propTypes.shape({
    //     config: propTypes.shape({
    //         resumePath: propTypes.string.isRequired,
    //         navigation: propTypes.object.isRequired
    //     }).isRequired
    // }).isRequired
}
export default HomeContainer;