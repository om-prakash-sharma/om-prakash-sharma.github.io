import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Full Stack Developer at Habilelabs Pvt. Ltd.<span> 2015-present</span></h2>
                        <p>I started my career at Habilelabs Pvt. Ltd. as a Software Developer, started working as mobile application developer and currently working as Associate Tech Lead/Senior Full Stack developer. 
                          I worked in <b>NodeJs, ReactJs, AngularJs, JQuery, EmberJs, Spring Boot(Java)</b> and <b>Native/Hybrid Mobile Application</b>.
                          </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Genx Soft Pvt. Ltd. <span> 2014-2015</span></h2>
                        <p>Completed my internship from Genx Soft. My major part of the internship has been into the field of developing creative native android mobile application with reach UX and better performance. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate at GIT Jaipur <span>2011-2015</span></h2>
                        <p>Completed my under-graduation studies with Computer Science and Technology. During my collage time I learn C/C++, Data Structure, Java, Android and
                            develop Expense Tracking Mobile Application as my minor project and Centralize Data sharing Project as my Major project.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2009-2010</span></h2>
                        <p>Completed my higher secondary education with major subjects as Physics,Chemistry & Maths.
                            During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
