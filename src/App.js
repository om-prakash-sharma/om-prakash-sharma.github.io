import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeLink: "",
      timelineList: []
    };
  }

  async componentDidMount() {
    let data = await fetch(
      `${window.location.protocol}//raw.githubusercontent.com/om-prakash-sharma/data/master/portfolio.json`
    );
    data = await data.json();
    this.setState({
      resumeLink: data.resume,
      timelineList: data.timeline || []
    });
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            {/*<Introduction></Introduction>*/}
            <About resumeLink={this.state.resumeLink}></About>
            <Timeline timelineList={this.state.timelineList}></Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
