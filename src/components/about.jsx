import React, { Component } from 'react'

export default class About extends Component {
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
                        <p>I have completed my B.Tech (Computer Science Engineering) from GIT Jaipur in 2015. I love exploring new technologies and always try to implementing new things/technology in my daily life</p>
                        <p>I started my career at HabileLabs Pvt. Ltd. in 2015 as a Software Developer and currently working as Associate Tech Lead.
                            I started working with Java (Spring Boot, Android Application developments) and then slowly slowly move to JavaScript and worked on multiple framework like ReactJs, Angular, Ionic, NodeJS etc. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about"  data-section="technology">
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
                        <h3>Web Development </h3>
                        <p>Experience in building web Application and Hybrid Mobile Application using JavaScript, Angular, Ionic, ReactJs, JQuery</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Experience in deploying project over AWS, GCloud, DigitalOcean, web hosting,
                        (load balancing, reverse proxy) using NGINX, Apache</p>
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
                            <p>Worked with multiple Database (MySQL, PostgresSQL, SQL Server) and Non-SQL database like MongoDB</p>
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
                            <p>I have experience in building Native Android Mobile Application using Java, XML, SQLite</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                <span className="icon">
                    <i className="icon-leaf" />
                </span>
                        <div className="desc">
                            <h3>Java/J2EE Applications</h3>
                            <p>Experience in building RESTful API in java framework using Spring Boot, Dropwizard.io</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-6">
                <span className="icon">
                    <i className="icon-box" />
                </span>
                        <div className="desc">
                            <h3>NodeJS</h3>
                            <p>I have experience in building RESTFul APIs using NodeJs, worked as a MEAN Stack developer in several projects</p>
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
