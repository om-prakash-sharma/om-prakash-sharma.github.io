import React, { Component } from 'react'

export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeLineList: [
        {
          "title": "Technical Lead",
          "period": "Jan 2022 - Present",
          "place": "Habilelabs Pvt. Ltd."
        },
        {
          "title": "Associate Technical Lead",
          "period": "Jun 2019 - Dec 2021 (2 year, 7 month",
          "place": "Habilelabs Pvt. Ltd."
        },
        {
          "title": "Senior Software Engineer",
          "period": "Jun 2017 - May 2019 (2 year)",
          "place": "Habilelabs Pvt. Ltd."
        },
        {
          "title": "Web Developer",
          "period": "Jun 2016 - May 2017 (1 year)",
          "place": "Habilelabs Pvt. Ltd."
        },
        {
          "title": "Android Developer",
          "period": "Jun 2015 - May 2016 (1 year)",
          "desc": "I started my career at Habilelabs Pvt. Ltd. as android mobile application developer",
          "place": "Habilesoft Pvt. Ltd."
        },
        {
          "title": "Internship",
          "period": "Jun 2014 - May 2015 (2 month)",
          "place": "Genx Soft Pvt. Ltd.",
          "desc": "Completed my internship from Genx Soft. My major part of the internship has been into the field of developing creative native android mobile application with reach UX and better performance."
        },
        {
          "title": "Undergraduate",
          "period": "July 2011 - June 2015 (4 year)",
          "place": "GIT Jaipur.",
          "desc": "Completed my under-graduation studies with Computer Science and Technology. During my collage time I learn C/C++, Data Structure, Java, Android and develop Expense Tracking Mobile Application as my minor project and Centralize Data sharing Project as my Major project."
        }
      ]
    }
  }

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

                  {this.state.timeLineList.map((timeLine, key) => {

                    return <article key={key} className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className={"timeline-icon color-" + (key % 5 + 1)}>
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>{timeLine.title} at {timeLine.place}<span> {timeLine.period}</span></h2>
                          <p>{timeLine.desc}</p>
                        </div>
                      </div>
                    </article>
                  })}
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
