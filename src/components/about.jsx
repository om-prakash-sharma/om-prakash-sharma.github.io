import React, { Component } from 'react'

export default class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            resumeLink : ''
        }
    }

    async componentDidMount(){

        let data = await fetch(`${window.location.protocol}//raw.githubusercontent.com/om-prakash-sharma/data/b5a16e6391c1cb60899154c84d405aee6f6330e3/portfolio.json`);
        data = await data.json();
        console.log(' ' , data.resume);
        this.setState({
            resumeLink : data.resume
        })
    }

    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I'm Om Prakash Sharma, have 6 years of professional experence in IT industry, completed my B.Tech (Computer Science Engineering) from GIT Jaipur in 2015. I love exploring new technologies and always try to implementing new things/technology in my projects.</p>
                                            <p>Currently working as a Full Stack Developer with experience in building websites, web applications and mobile applications. Ability to learn new technologies/framework quickly. Have professional experience working with <b>JavaScript, NodeJS, ReactJs, EmberJs, AngularJs, JQuery, Spring Boot, Native Android applications, PostgreSQL </b> and <b>MongoDB</b>.</p>
                                            <p><a className="btn btn-primary btn-learn" href={this.state.resumeLink} target="_blank" rel="noopener noreferrer">Check CV <i className="icon-download4 download-cv" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about" data-section="technology">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-chrome" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development</h3>
                                        <p>Professional Experience in building Web Application using JavaScript, AngularJs, ReactJs, EmberJs, JQuery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-box" />
                                    </span>
                                    <div className="desc">
                                        <h3>Backend Development</h3>
                                        <p>Professional Experience in building RESTFul APIs in NodeJs(JavaScript) and Spring Boot(Java)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Database</h3>
                                        <p>Experience with multiple Database (MySQL, PostgresSQL, SQL Server) and Non-SQL database (MongoDB)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-android" />
                                    </span>
                                    <div className="desc">
                                        <h3>Mobile Application </h3>
                                        <p>Experience in building Native Android apps using java, xml and Hybrid apps using Ionic framework (JavaScript) </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Others</h3>
                                        <p>Familiar with GIT, deployment of project over AWS, GCloud, DigitalOcean, Web hosting, NGINX( load balancing, reverse proxy )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
