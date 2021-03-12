import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div id="navigationArea">
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Om Sharma</a></h1>
              <span className="email"><i className="icon-mail"></i> om.sharma@outlook.in </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  {/*<li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>*/}
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#technology" data-nav-section="technology">Expertise</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*!/*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/om-prakash-sharma-b73582b9" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/om-prakash-sharma" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://stackoverflow.com/users/4976786/om-sharma" target="_blank" rel="noopener noreferrer"><i className="icon-stackoverflow"></i></a></li>
                <li><a href="https://www.facebook.com/om.sharma.92" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-music2" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
