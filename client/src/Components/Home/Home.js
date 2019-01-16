import React, { Component } from 'react';
import './home.scss';

export class Home extends Component {
  render() {
    return (
      <div>
        <section className="home" id="home">
          <div className="home_content">
            <h1 className="home_heading">
              Hello, I'm
              <span> Dharmendra Alex.</span>
              <br />
              I'm a full-stack web developer.
            </h1>
          <a href={'./doc/Resume.pdf'} download="Resume">
              <button className="home_btn">Download Resume</button>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
