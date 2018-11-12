import React, { Component } from 'react';
import './about.scss';
import Heading from '../Common/Heading';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Reactcar } from '../../img/car.svg';
import { ReactComponent as Responsive } from '../../img/Responsive.svg';
import { ReactComponent as Light } from '../../img/LightBulb.svg';
import { ReactComponent as Dynamic } from '../../img/Dynamic.svg';
import ProfilePic from '../../img/ProfilePic.svg';

import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
export class About extends Component {
  render() {
    return (
      <>
        <section className="about" id="about">
          <Fade left>
            <Heading title="About" />
          </Fade>
          <div className="row">
            <div className="col-lg-12">
              <div className="container">
                <div className="row mx-auto text-center mb-3">
                  <Card
                    icon={<Reactcar />}
                    title="Fast"
                    description="Scalability and performance, my highest priority."
                  />
                  <Card
                    icon={<Responsive />}
                    title="Resposive"
                    description="My layouts adapts to all devices."
                  />
                  <Card
                    icon={<Light />}
                    title="Quality"
                    description="I like clean, robust and maintainable code."
                  />
                  <Card
                    icon={<Dynamic />}
                    title="Design"
                    description="Satisfactory experience with Intuitive UX/UI design ."
                  />
                </div>
                <div className="row profile">
                  <Fade left>
                    <div className="col-md-12 col-lg-5 ">
                      <img src={ProfilePic} alt="profile pic" />
                      <h2>About Me</h2>
                      <p>
                        Highly innovative with a serious passion to learn and
                        work with cutting edge technologies. Strong analytical
                        skills with a Software Engineering degree. A Fast
                        learner and an excellent team player with a positive
                        attitude.
                      </p>
                    </div>
                  </Fade>

                  <div className="col-md-12 col-lg-7">
                    <ProgressBar
                      style={{ width: '90%' }}
                      tag="HTML"
                      percentage="90%"
                    />
                    <ProgressBar
                      style={{ width: '90%' }}
                      tag="CSS"
                      percentage="90%"
                    />
                    <ProgressBar
                      style={{ width: '88%' }}
                      tag="React"
                      percentage="80%"
                    />
                    <ProgressBar
                      style={{ width: '75%' }}
                      tag="Redux"
                      percentage="75%"
                    />
                    <ProgressBar
                      style={{ width: '60%' }}
                      tag="Node.js"
                      percentage="50%"
                    />
                    <ProgressBar
                      style={{ width: '60%' }}
                      tag="MongoDB"
                      percentage="50%"
                    />
                    <ProgressBar
                      style={{ width: '70%' }}
                      tag="UI/UX Design"
                      percentage="70%"
                    />
                    <ProgressBar
                      style={{ width: '90%' }}
                      tag="Agile"
                      percentage="90%"
                    />
                    <ProgressBar
                      style={{ width: '90%' }}
                      tag="SDLC"
                      percentage="90%"
                    />
                    <ProgressBar
                      style={{ width: '60%' }}
                      tag="Figma"
                      percentage="50%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default About;
